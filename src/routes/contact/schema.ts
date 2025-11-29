import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  subject: z.string(),
  message: z.string().min(2)
})

export type FormSchema = typeof formSchema