import styled from 'styled-components';
import { motion } from 'framer-motion';

import coinImg from '../../images/coin.png';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: #242124;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  width: 700px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 107px;
  background: linear-gradient(90deg, #fff8dc, #ffdf6c, #d4af37, #8c6b1f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
`;

export const CoinImg = styled(motion.div)`
  background-image: url(${coinImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 250px;
  position: absolute;
  left: 28%;
  top: -25%;
  opacity: 0.8;
  perspective: 800px;
`;
