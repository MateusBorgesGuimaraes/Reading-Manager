export default function defineColor(color: string) {
  switch (color) {
    case 'amarelo':
      return '#EAB308';

    case 'azul':
      return '#3B82F6';

    case 'ciano':
      return '#06B6D4';

    case 'verde':
      return '#22C55E';

    case 'vermelho':
      return '#EF4444';

    case 'laranja':
      return '#F97316';

    case 'roxo':
      return '#8B5CF6';

    default:
      return '#6B7280';
  }
}
