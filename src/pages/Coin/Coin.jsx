import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

import * as unique from './styled';
import axios from '../../services/axios';
import CoinHeader from '../../components/CoinHeader/CoinHeader';

export default function Coin() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

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
      } finally {
        setLoading(false);
      }
    }

    Getcoin();
  }, [id]);

  if (loading) {
    return <h1>Aguarde....</h1>;
  }

  const uniqueCoin = coin[0];

  return (
    <unique.SecondMain>
      <CoinHeader coins={coin} />
      <unique.Divtop />

      <unique.ContainerWrapper>
        <unique.ContainerChart>
          <unique.DivName>
            <unique.NameCoin>{uniqueCoin.name}</unique.NameCoin>
          </unique.DivName>
          <unique.DivArrow onClick={() => navigate(-1)}>
            <IoArrowBack className="arrow" />
          </unique.DivArrow>
        </unique.ContainerChart>

        <unique.DivKPI>
          <unique.KPICard />
          <unique.KPICard />
          <unique.KPICard />
          <unique.KPICard />
          <unique.KPICard />
        </unique.DivKPI>
      </unique.ContainerWrapper>
    </unique.SecondMain>
  );
}
