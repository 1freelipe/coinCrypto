export const getFormattedUpdateDate = (coinArray) => {
  if (coinArray.length === 0 || !coinArray) return 'Carregando...';

  const uniqueCoin = coinArray[0];
  const updated = uniqueCoin?.last_updated;

  if (!updated) return 'N/A';

  const dateObj = new Date(updated);
  return dateObj.toLocaleString('pt-BR');
};

export const formatSymbol = (str) => {
  if (typeof str !== 'string') return '';
  return str.toUpperCase();
};

export const formatCoin = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
