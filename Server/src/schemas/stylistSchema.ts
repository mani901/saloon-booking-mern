import { z } from 'zod';

export const StylistSchema = z.object({
  bio: z.string().max(1000, 'Bio cannot exceed 1000 characters').optional(),
  experience: z
    .number()
    .int('Experience must be an integer')
    .min(0, 'Experience cannot be negative'),
});

export type StylistInput = z.infer<typeof StylistSchema>;