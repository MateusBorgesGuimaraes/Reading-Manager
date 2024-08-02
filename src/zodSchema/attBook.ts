import z from 'zod';

export const booksAttSchema = z.object({
  stopInPage: z.string().min(1, 'Deve ser um número maior que 0'),
  timeSpent: z.string().regex(/^\d{2}:\d{2}$/, 'Formato deve ser 00:00'),
  statusOfreading: z.enum(['Completo', 'Lendo', 'Pausado', 'Dropado']),
});

export type BookAtt = z.infer<typeof booksAttSchema>;
