import React, { useEffect, useState } from 'react';
import Getcoins from '../../api/api';

import CardCoin from '../../components/CardCoin/CardCoin';
import * as coin from './styled';
import CoinCryptoLogo from '../../components/AuraHover/AuraHover';

export default function CryptoCoins() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Getcoins();
        setCryptoCoins(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Aguarde....</h1>;
  }

  // Método para formatação de valores, já formatado com o R$ utilizando Intl.NumberFormat
  const formatCoin = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Método para formatação de porcentagem.
  const percentageFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Método para formatar os símbolos de cada moeda em maiúsculo.
  const formatSymbol = (str) => {
    if (typeof str !== 'string') return '';
    return str.toUpperCase();
  };

  const updated = cryptoCoins[0].last_updated;
  const symbol = cryptoCoins[0].symbol;
  const totalVolume = cryptoCoins[0].total_volume;
  const totalSuply = cryptoCoins[0].total_supply;

  return (
    <coin.Main>
      <coin.DivInformation>
        <coin.DivWrapperInformation>
          <coin.Information>Last Updated: {updated} </coin.Information>
          <coin.Information>Top Coin: {formatSymbol(symbol)}</coin.Information>
          <coin.Information>Total Volume: {totalVolume}</coin.Information>
          <coin.Information>Total Supply: {totalSuply}</coin.Information>
        </coin.DivWrapperInformation>
      </coin.DivInformation>
      <coin.ContainerTitle>
        <CoinCryptoLogo />
      </coin.ContainerTitle>

      <coin.DivForm>
        <coin.InputCoin placeholder="Procure a crypto..." />
      </coin.DivForm>

      <coin.Sectioncoins>
        {loading ? (
          <CardCoin>
            <h1 style={{ color: '#fffff0' }}>Coins not found</h1>
          </CardCoin>
        ) : (
          cryptoCoins.map((coins, key) => {
            return (
              <CardCoin key={key}>
                <coin.Cryptobadge>
                  <coin.Badge>{`#${coins.market_cap_rank}`}</coin.Badge>
                </coin.Cryptobadge>
                <coin.Namecrypto>
                  {coins.name}
                  {` (${formatSymbol(coins.symbol)})`}
                </coin.Namecrypto>
                <coin.DivImg>
                  <coin.Cryptoimg src={coins.image} />
                </coin.DivImg>
                <coin.PriceWrapper>
                  <coin.Cryptoprice>
                    {formatCoin.format(coins.current_price)}
                  </coin.Cryptoprice>
                  <coin.Cryptopricepercentage
                    price={coins.price_change_percentage_24h}
                  >
                    {' '}
                    {`(${percentageFormat.format(coins.price_change_percentage_24h)}%)`}
                  </coin.Cryptopricepercentage>
                </coin.PriceWrapper>
                <coin.CryptoPriceChange>
                  24h ({formatCoin.format(coins.market_cap_change_24h)})
                </coin.CryptoPriceChange>
                <coin.HighLow>
                  <coin.Price>High ({coins.high_24h})</coin.Price>
                  <coin.Price>Low ({coins.low_24h})</coin.Price>
                </coin.HighLow>

                <coin.ButtonDetail
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial="0"
                  animate={{ x: [0, 5, -10, 0] }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 5,
                    repeat: 'Infinity',
                  }}
                >
                  Detalhes...
                </coin.ButtonDetail>
              </CardCoin>
            );
          })
        )}
      </coin.Sectioncoins>
    </coin.Main>
  );
}
