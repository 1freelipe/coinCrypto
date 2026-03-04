import axios from '../services/axios';

export default async function Getcoins(perPage = 20, page = 1) {
  try {
    const response = await axios.get(`coins/markets`, {
      params: {
        vs_currency: 'brl',
        per_page: perPage,
        page: page,
      },
    });

    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      console.log('Falha na requisição', response);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
