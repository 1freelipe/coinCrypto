// Método para receber a data vindo da API e converter ela para o padrão da minha timezone no meu país
export const getFormattedUpdateDate = (coinArray) => {
  // Evita de quebrar a renderização aguardando o useEffect montar o componente principal
  if (coinArray.length === 0 || !coinArray) return 'Carregando...';

  const uniqueCoin = coinArray[0];
  const updated = uniqueCoin?.last_updated;

  if (!updated) return 'N/A';

  const dateObj = new Date(updated);
  return dateObj.toLocaleString('pt-BR');
};

export const getFormattedATHDate = (coinArray) => {
  if (coinArray.length === 0 || !coinArray) return 'Carregando...';

  const uniqueCoin = coinArray[0];
  const athDate = uniqueCoin.ath_date;

  if (!athDate) return 'N/A';

  const dateObj = new Date(athDate);
  return dateObj.toLocaleString('pt-BR');
};

// Método para formatação do símbolo ou de qualquer coisa que eu precise do CAPITALIZE
export const formatSymbol = (str) => {
  if (typeof str !== 'string') return '';
  return str.toUpperCase();
};

// Método para formatação de dinheiro, já formatado para BRL
export const formatCoin = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Método para formatação de porcentagem.
export const percentageFormat = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
