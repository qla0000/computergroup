import { z } from "zod"
import validator from "validator"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "A név minimum 2 karakter hosszú legyen")
    .max(50, "A név maximum 50 karakter lehet")
    .transform((str) => validator.escape(str.trim())),
    
  email: z
    .string()
    .email("Érvénytelen email cím")
    .transform((str) => validator.normalizeEmail(str.trim())),
    
  phone: z
    .string()
    .optional()
    .refine((val) => !val || validator.isMobilePhone(val, "hu-HU"), {
      message: "Érvénytelen telefonszám",
    })
    .transform((str) => str ? validator.escape(str.trim()) : str),
    
  message: z
    .string()
    .min(10, "Az üzenet minimum 10 karakter hosszú legyen")
    .max(1000, "Az üzenet maximum 1000 karakter lehet")
    .transform((str) => validator.escape(str.trim())),
    
  honeypot: z
    .string()
    .max(0, "Spam védelem aktiválva"),

  subject: z
    .string()
    .min(2, "A tárgy minimum 2 karakter hosszú legyen")
    .max(100, "A tárgy maximum 100 karakter lehet")
    .transform((str) => validator.escape(str.trim())),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
