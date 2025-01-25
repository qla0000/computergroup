import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { z } from "zod";

export function useContactForm() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const validateForm = (data: unknown) => {
    try {
      const validatedData = contactFormSchema.parse(data);
      setErrors({});
      return { success: true, data: validatedData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce(
          (acc, curr) => {
            const path = curr.path[0] as keyof ContactFormData;
            acc[path] = curr.message;
            return acc;
          },
          {} as Record<keyof ContactFormData, string>
        );
        setErrors(formattedErrors);
      }
      return { success: false, error };
    }
  };

  const reset = () => setErrors({});

  return { errors, validateForm, reset };
}
