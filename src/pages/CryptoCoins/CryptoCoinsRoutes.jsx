import { Route, Routes, Navigate } from 'react-router';

import CryptoCoins from './CryptoCoins';
import Coin from '../Coin/Coin';

export default function CryptoCoinsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/index'} replace />} />
      <Route path="/index" element={<CryptoCoins />} />
      <Route path="/coin/:id" element={<Coin />} />
    </Routes>
  );
}
