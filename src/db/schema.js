import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leadsTable = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  domain: text("domain"),
  candidates: text("candidates"),
  deliveryMode: text("delivery_mode"),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});