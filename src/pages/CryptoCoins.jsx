import React, { useEffect } from 'react';
import Getcoins from '../api/api';

export default function CryptoCoins() {
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

  return <h1>Hello World!</h1>;
}
