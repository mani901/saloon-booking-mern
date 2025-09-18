import { z } from 'zod';

export const ServiceSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long').trim(),
  description: z.string().min(1, 'Description is required').max(500).trim(),
  duration: z
    .number()
    .int('Duration must be an integer')
    .min(1, 'Duration must be at least 1 minute'),
  price: z
    .number()
    .min(0, 'Price cannot be negative')
    .multipleOf(0.01, 'Price must have at most 2 decimal places'),
});


export type ServiceInput = z.infer<typeof ServiceSchema>;
