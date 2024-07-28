export function formatarData(data: Date) {
  const dataString = String(data);
  const data1 = dataString.split('T');
  const data2 = data1[0].split('-');
  const ano = data2[0];
  const mes = data2[1];
  const dia = data2[2];

  return `${dia}/${mes}/${ano}`;
}
