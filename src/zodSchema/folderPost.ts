import z from 'zod';

export const folderPostSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O campo nome deve ter no minimo 3 caracters' }),
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

export type FolderPost = z.infer<typeof folderPostSchema>;
