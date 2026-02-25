import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import Getcoins from '../../api/api';

import * as coin from './styled';

export default function CryptoCoins() {
  const controls = useAnimation();
  const [rotation, setRotation] = useState(0);

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
      setRotation((prev) => prev + 180);

      controls.start({
        rotateY: rotation + 180,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      console.log(rotation);
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, rotation]);

  return (
    <coin.Main>
      <coin.ContainerTitle>
        <coin.CoinImg
          animate={controls}
          initial={{ rotateY: 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <coin.Title>CoinCrypto</coin.Title>
      </coin.ContainerTitle>
    </coin.Main>
  );
}
