import z from 'zod';

export const markerPostSchema = z.object({
  markerName: z
    .string()
    .min(3, { message: 'O campo markerName deve ter no minimo 3 caracters' }),

  page: z.string().min(1, { message: 'O campo paginas deve ser preenchido' }),

  content: z
    .string()
    .min(10, {
      message:
        'O campo content deve deve ser preenchido com no minimo 10 caracteres',
    }),

  color: z
    .enum([
      'amarelo',
      'azul',
      'ciano',
      'verde',
      'vermelho',
      'laranja',
      'roxo',
      'cinza',
    ])
    .default('cinza'),
});

export type MarkerPost = z.infer<typeof markerPostSchema>;
