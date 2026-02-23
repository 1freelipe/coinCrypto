import axios from 'axios';

// URL padrão do axios definida.
export default axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  // Header necessário para a chamada da API, evita bloqueios de IP
  headers: {
    'x-cg-demo-api-key': process.env.REACT_APP_APY_KEY,
  },
});
