import { z } from "zod";

export const updateUserSchema = z.object({
  full_name: z.string().min(2).max(32).optional(),
  path: z.string(),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;
