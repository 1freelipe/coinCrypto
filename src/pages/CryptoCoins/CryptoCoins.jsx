import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Getcoins from '../../api/api';
import { GoSearch } from 'react-icons/go';
import axios from '../../services/axios';

import CardCoin from '../../components/CardCoin/CardCoin';
import * as coin from './styled';
import CoinCryptoLogo from '../../components/AuraHover/AuraHover';
import Pagination from '../../components/Pagination/Pagination';
import LoadingSkeleton from '../../components/Skeleton/Skeleton';
import {
  getFormattedUpdateDate,
  formatCoin,
  formatSymbol,
  percentageFormat,
} from '../../helpers/utils/formatters';

export default function CryptoCoins() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInputText, setSearchInputText] = useState('');
  const perPage = 20;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (search && search.length > 0) {
          const response = await axios.get(`coins/markets`, {
            params: {
              vs_currency: 'brl',
              ids: search.toLowerCase(),
            },
          });
          console.log(response.data);
          setCryptoCoins(response.data);
        } else {
          const data = await Getcoins(perPage, page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCryptoCoins(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, search]);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e) => {
    setSearchInputText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSearch(searchInputText);
    setPage(1);
  };
  const handleNavigate = (id) => {
    navigate(`/coin/${id}`);
  };

  const dateFormated = getFormattedUpdateDate(cryptoCoins);

  // Capturando o primeiro valor SE ele existir
  const firstCoin = cryptoCoins[0];
  // Optional Chain para valores seguros evitando de quebrar a API
  const symbol = firstCoin?.symbol;
  const totalVolume = firstCoin?.total_volume;
  const totalSuply = firstCoin?.total_supply;
  const allTimeHigh = firstCoin?.ath;

  return (
    <coin.Main>
      <coin.DivInformation>
        <coin.DivWrapperInformation>
          <coin.Information>
            Last Updated: <strong>{dateFormated}</strong>{' '}
          </coin.Information>
          <coin.Information>
            Top Coin: <strong>{formatSymbol(symbol)}</strong>
          </coin.Information>
          <coin.Information>
            Total Volume: <strong>{totalVolume}</strong>
          </coin.Information>
          <coin.Information>
            Total Supply: <strong>{totalSuply}</strong>
          </coin.Information>
          <coin.Information>
            All-Time-High: <strong>{formatCoin.format(allTimeHigh)}</strong>
          </coin.Information>
        </coin.DivWrapperInformation>
      </coin.DivInformation>
      <coin.ContainerTitle onClick={() => navigate('/index')}>
        <CoinCryptoLogo />
      </coin.ContainerTitle>
      <coin.DivForm>
        <coin.InputCoin
          placeholder="Find your crypto..."
          type="text"
          value={searchInputText}
          onChange={handleChange}
        />
        <coin.ButtonSearch onClick={handleClick}>
          <GoSearch className="search" />
        </coin.ButtonSearch>
      </coin.DivForm>

      <coin.Sectioncoins>
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          : cryptoCoins.map((coins, key) => {
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
                    24h ({coins.market_cap_change_24h})
                  </coin.CryptoPriceChange>
                  <coin.HighLow>
                    <coin.Price>High ({coins.high_24h})</coin.Price>
                    <coin.Price>Low ({coins.low_24h})</coin.Price>
                  </coin.HighLow>

                  <coin.ButtonDetail
                    onClick={() => handleNavigate(coins.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ x: [0, -20, 20, -10, 0] }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 5,
                      repeatDelay: 5,
                      repeat: Infinity,
                    }}
                  >
                    Detalhes...
                  </coin.ButtonDetail>
                </CardCoin>
              );
            })}
      </coin.Sectioncoins>
      {!search && (
        <Pagination>
          <button onClick={handlePrevPage} disabled={page === 1}>
            Anterior
          </button>

          <span>Página {page}</span>

          <button onClick={handleNextPage} disabled={loading}>
            Próxima
          </button>
        </Pagination>
      )}
    </coin.Main>
  );
}
