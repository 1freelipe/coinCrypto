import styled from 'styled-components';
import { motion } from 'framer-motion';

import coinImg from '../../images/coin.png';

export const Main = styled.main`
  background: #242124;
  min-height: 100vw;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 50px;
  position: relative;
`;

export const CoinImg = styled(motion.div)`
  background-image: url(${coinImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 32%;
  top: -22%;
  opacity: 0.8;
  perspective: 800px;
`;

export const DivForm = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const InputCoin = styled.input`
  width: 100%;
  background: #252525;
  border: none;
  border: 1px solid #bc13fe;
  padding: 20px;
  border-radius: 9px;
  font-size: 15px;
  color: #fffff0;
  outline: none;

  &::placeholder {
    color: #fffff0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

export const Sectioncoins = styled.section`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 40px auto;
  padding: 20px;
  gap: 25px;
`;

export const Namecrypto = styled.h2`
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #fffff0;
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
`;

export const Cryptoimg = styled.img`
  width: 100%;
`;

export const Cryptobadge = styled.div`
  position: absolute;
  top: 10px;
  right: 13px;
  width: 50px;
  height: 50px;
`;

export const Badge = styled.h3`
  color: #d4af37;
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Cryptoprice = styled.h2`
  color: #fffff0;
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
`;

export const Cryptopricepercentage = styled.h2`
  color: ${(props) => (props.price > 0 ? '#90ee90' : 'red')};
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
`;

export const CryptoPriceChange = styled.h3`
  color: #fffff0;
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
`;

export const HighLow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  color: #fffff0;
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
`;
