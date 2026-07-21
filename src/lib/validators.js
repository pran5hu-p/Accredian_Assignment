import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits."),
  company: z.string().optional(),
  domain: z.string().min(1, "Please select a domain."),
  candidates: z.string().min(1, "Please enter the number of candidates.").regex(/^[0-9]+$/, "Number of candidates must contain digits only."),
  deliveryMode: z.string().min(1, "Please select a mode of delivery."),
  location: z.string().optional().refine(
    (val) => !val || /^[A-Za-z\s]+$/.test(val),
    { message: "Location must contain only alphabetic characters." }
  ),
});