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

  const formatCoin = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const percentageFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formatSymbol = (str) => {
    if (typeof str !== 'string') return '';
    return str.toUpperCase();
  };

  console.log(cryptoCoins);

  return (
    <coin.Main>
      <coin.ContainerTitle>
        <CoinCryptoLogo />
      </coin.ContainerTitle>

      <coin.DivForm>
        <coin.InputCoin placeholder="Procure a crypto..." />
      </coin.DivForm>

      <coin.Sectioncoins>
        {cryptoCoins.map((coins, key) => (
          <>
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
              <coin.CryptoPriceChange>24h (-1564897756)</coin.CryptoPriceChange>
              <coin.HighLow>
                <coin.Price>High (515615....)</coin.Price>
                <coin.Price>Low (515615....)</coin.Price>
              </coin.HighLow>
            </CardCoin>
          </>
        ))}
      </coin.Sectioncoins>
    </coin.Main>
  );
}
