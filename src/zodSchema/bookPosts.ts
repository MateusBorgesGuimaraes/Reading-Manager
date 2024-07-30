import z from 'zod';

export const booksPostSchema = z.object({
  bookname: z
    .string()
    .min(3, { message: 'O campo nome deve ter no minimo 3 caracters' }),

  author: z
    .string()
    .min(3, { message: 'O campo autor deve ter no minimo 3 caracters' }),

  pagesNumber: z
    .string()
    .min(1, { message: 'O campo paginas deve ser preenchido' }),

  stopInPage: z
    .string()
    .min(1, { message: 'O campo parou na pagina deve ser preenchido' }),

  statusOfreading: z
    .enum(['Completo', 'Lendo', 'Dropado', 'Pausado'])
    .default('Lendo'),

  timeSpent: z
    .string()
    .min(1, { message: 'O campo tempo gasto deve deve ser preenchido' }),
});

export type BookPost = z.infer<typeof booksPostSchema>;
