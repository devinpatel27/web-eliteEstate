import { z } from "zod";
import { areas } from "@/data/areas";

export const interests = ["Buying", "Selling", "Leasing", "Investment", "NRI Services", "Other"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,16}$/, "Please enter a valid phone number"),
  email: z.union([z.literal(""), z.email("Please enter a valid email")]).optional(),
  interest: z.enum(interests, { error: "Please choose an option" }),
  area: z.union([z.literal(""), z.enum(areas.map((a) => a.slug) as [string, ...string[]])]).optional(),
  message: z.string().trim().max(1000).optional(),
  // Honeypot – must stay empty.
  company: z.string().max(0).optional(),
});

export type Enquiry = z.infer<typeof enquirySchema>;
