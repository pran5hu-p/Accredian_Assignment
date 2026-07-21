import { NextResponse } from "next/server";
import { db } from "@/db";
import { leadsTable } from "@/db/schema";
import { leadSchema } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();

    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      // Use .issues or fallback gracefully to avoid undefined errors
      const errorList = validationResult.error.issues || validationResult.error.errors || [];
      const errorMessages = errorList.map((err) => err.message).join(", ") || "Validation failed";
      
      return NextResponse.json(
        { success: false, message: errorMessages },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const newLead = await db.insert(leadsTable).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      domain: data.domain || null,
      candidates: data.candidates || null,
      deliveryMode: data.deliveryMode,
      location: data.location || null,
    }).returning();

    return NextResponse.json(
      { success: true, message: "Lead saved successfully!", data: newLead[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}