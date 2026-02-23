import axios from '../services/axios';

export default async function Getcoins() {
  try {
    const response = await axios.get(`coins/markets?vs_currency=brl`, {
      per_page: 10,
    });
    if (response.status >= 200 && response.status <= 299) {
      return console.log(response.data);
    } else {
      console.log('Falha na requisição', response);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
