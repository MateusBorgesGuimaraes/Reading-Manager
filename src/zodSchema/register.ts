import z from 'zod';

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O campo nome deve ter no minimo 3 caracters' }),
  password: z
    .string()
    .min(3, { message: 'O campo password deve ter no minimo 3 caracters' }),
  email: z.string().email(),
});

export type UserRegister = z.infer<typeof registerSchema>;
