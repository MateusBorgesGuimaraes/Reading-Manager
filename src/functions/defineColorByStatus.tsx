export default function defineColorByStatus(color: string) {
  switch (color) {
    case 'Pausado':
      return '#EAB308';

    case 'Completo':
      return '#22C55E';

    case 'Lendo':
      return '#06B6D4';

    case 'Dropado':
      return '#EF4444';
  }
}
