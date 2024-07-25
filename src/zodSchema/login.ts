import z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O campo nome deve ter no minimo 3 caracters' }),
  password: z
    .string()
    .min(3, { message: 'O campo password deve ter no minimo 3 caracters' }),
});

export type User = z.infer<typeof loginSchema>;
