import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

import * as unique from './styled';
import axios from '../../services/axios';
import CoinHeader from '../../components/CoinHeader/CoinHeader';
import CandlestickChart from '../../components/Candlestick/Candlestick';
import AreaChart from '../../components/AreaChart/AreaChart';
import Histogram from '../../components/Histogram/Histogram';
import BaseLine from '../../components/BaseLine/BaseLine';
import {
  formatCoin,
  percentageFormat,
  getFormattedATHDate,
} from '../../helpers/utils/formatters';
import LoadingSkeletonDetail from '../../components/SkeletonDetail/SkeletonDetail';
import WaitCrypto from '../../components/WaitCrypto/WaitCrypto';

export default function Coin() {
  const [coin, setCoin] = useState([]);
  const [ohlc, setOHLC] = useState([]);
  const [areaChart, setAreaChart] = useState([]);
  const [histogramChart, setHistogramChart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function Getcoin() {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 50000000));
        const [response, responseOHLC, responseAreaChart] = await Promise.all([
          axios.get(`coins/markets`, {
            params: {
              vs_currency: 'brl',
              ids: id,
            },
          }),
          axios.get(`coins/${id}/ohlc`, {
            params: {
              vs_currency: 'brl',
              days: 30,
            },
          }),
          axios.get(`coins/${id}/market_chart`, {
            params: {
              vs_currency: 'brl',
              days: 7,
            },
          }),
        ]);
        // Formatando o retorno da API para o padrão que o Ligthweigth-charts precisa
        const formattedData = responseOHLC.data.map((item) => ({
          // A API do CoinGecko retorna o tempo em milissegundos, e o chart precisa em segundo
          time: item[0] / 1000,
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        }));

        const formattedMarketData = responseAreaChart.data.prices.map(
          (item) => ({
            time: Math.floor(item[0] / 1000),
            value: item[1],
          }),
        );
        const formattedTimeVolumes = responseAreaChart.data.total_volumes.map(
          (item) => ({
            time: Math.floor(item[0] / 1000),
            value: item[1],
          }),
        );
        setOHLC(formattedData);
        setCoin(response.data);
        setAreaChart(formattedMarketData);
        setHistogramChart(formattedTimeVolumes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    Getcoin();
  }, [id]);

  if (loading || !ohlc) {
    return <LoadingSkeletonDetail />;
  }

  if (coin.length === 0) {
    return <WaitCrypto />;
  }

  const uniqueCoin = coin[0];
  const athDate = getFormattedATHDate(coin);

  return (
    <unique.SecondMain>
      <CoinHeader coins={coin} />
      <unique.Divtop />

      <unique.ContainerWrapper>
        <unique.ContainerChart>
          <unique.DivName>
            <unique.NameCoin>
              {uniqueCoin.name} ({uniqueCoin.symbol}) - History for 30 days
            </unique.NameCoin>
          </unique.DivName>
          <unique.DivArrow onClick={() => navigate(-1)}>
            <IoArrowBack className="arrow" />
          </unique.DivArrow>

          <CandlestickChart data={ohlc} />
        </unique.ContainerChart>

        <unique.DivKPI>
          <unique.KPICard>
            <unique.DivName>
              <unique.NameCoin className="subtitle">Histogram</unique.NameCoin>
            </unique.DivName>
            <Histogram data={histogramChart} />
          </unique.KPICard>
          <unique.KPICard>
            <unique.DivName>
              <unique.NameCoin className="subtitle">
                Media base prices
              </unique.NameCoin>
            </unique.DivName>
            <BaseLine data={areaChart} />
          </unique.KPICard>
        </unique.DivKPI>
      </unique.ContainerWrapper>

      <unique.DivGrid>
        <unique.KPIGrid>
          <unique.WrapperTitle>
            <unique.TitleKPI>Current Price</unique.TitleKPI>
          </unique.WrapperTitle>

          <unique.NameCoin>
            {formatCoin.format(uniqueCoin.current_price)}
          </unique.NameCoin>
        </unique.KPIGrid>
        <unique.KPIGrid>
          <unique.WrapperTitle>
            <unique.TitleKPI>High Price (24h)</unique.TitleKPI>
          </unique.WrapperTitle>

          <unique.NameCoin>
            {formatCoin.format(uniqueCoin.high_24h)}
          </unique.NameCoin>
        </unique.KPIGrid>
        <unique.KPIGrid>
          <unique.WrapperTitle>
            <unique.TitleKPI>Percentage 24h</unique.TitleKPI>
          </unique.WrapperTitle>

          <unique.NameCoin
            percentage={uniqueCoin.price_change_percentage_24h}
            className="percentagePrice"
          >
            {uniqueCoin.price_change_percentage_24h > 0 ? '+' : ''}
            {percentageFormat.format(uniqueCoin.price_change_percentage_24h)}%
          </unique.NameCoin>
        </unique.KPIGrid>
        <unique.KPIGrid>
          <unique.WrapperTitle>
            <unique.TitleKPI>ATH Date</unique.TitleKPI>
          </unique.WrapperTitle>

          <unique.NameCoin>{athDate}</unique.NameCoin>
        </unique.KPIGrid>
      </unique.DivGrid>

      <unique.ContainerAreaChart>
        <unique.DivName>
          <unique.NameCoin>Line Price - History for 7 days</unique.NameCoin>
        </unique.DivName>
        <AreaChart data={areaChart} />
      </unique.ContainerAreaChart>
    </unique.SecondMain>
  );
}
