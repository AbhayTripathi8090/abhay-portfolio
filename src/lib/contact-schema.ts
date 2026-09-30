import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(80, "Name must be 80 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(254, "Email address is too long."),
  subject: z.string().trim().min(3, "Please enter a subject of at least 3 characters.").max(120, "Subject must be 120 characters or fewer.").refine((value) => !/[\r\n]/.test(value), "Subject cannot contain line breaks."),
  message: z.string().trim().min(10, "Please enter a message of at least 10 characters.").max(5000, "Message must be 5,000 characters or fewer."),
  website: z.string().max(0).optional(),
  formStartedAt: z.number().int().positive(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
