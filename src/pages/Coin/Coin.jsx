import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import * as unique from './styled';
import axios from '../../services/axios';
import CoinHeader from '../../components/CoinHeader/CoinHeader';

export default function Coin() {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function Getcoin() {
      try {
        const response = await axios.get(`coins/markets`, {
          params: {
            vs_currency: 'brl',
            ids: id,
          },
        });
        console.log(response.data);
        setCoin(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    Getcoin();
  }, [id]);

  return (
    <unique.SecondMain>
      <CoinHeader coins={coin} />
    </unique.SecondMain>
  );
}
