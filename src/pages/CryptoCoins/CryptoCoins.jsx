import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import Getcoins from '../../api/api';

import CardCoin from '../../components/CardCoin/CardCoin';
import * as coin from './styled';
import CoinCryptoLogo from '../../components/AuraHover/AuraHover';

export default function CryptoCoins() {
  const controls = useAnimation();
  const [rotation, setRotation] = useState(180);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Getcoins();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 360);

      controls.start({
        rotateY: rotation + 180,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, rotation]);

  return (
    <coin.Main>
      <coin.ContainerTitle>
        <CoinCryptoLogo />
      </coin.ContainerTitle>

      <coin.DivForm>
        <coin.InputCoin placeholder="Procure a crypto..." />
      </coin.DivForm>

      <coin.Sectioncoins>
        <CardCoin />
        <CardCoin />
        <CardCoin />
        <CardCoin />
        <CardCoin />
      </coin.Sectioncoins>
    </coin.Main>
  );
}
