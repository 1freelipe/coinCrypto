import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  background: #242124;
  min-height: 100vw;
  padding: 20px;
  position: relative;
`;

export const ContainerTitle = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 50px;
  position: relative;
`;

export const DivForm = styled.form`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

export const InputCoin = styled.input`
  width: 100%;
  background: #252525;
  border: none;
  border: 1px solid #bc13fe;
  padding: 20px;
  border-radius: 9px;
  font-size: 17px;
  color: #fffff0;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #d4af37;
  }

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

  @media (min-width: 1100px) and (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1450px) {
    width: 100%;
  }

  @media (max-width: 1099px) {
    grid-template-columns: 1fr;
  }
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

export const DivInformation = styled.div`
  width: 100%;
  padding: 10px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const DivWrapperInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-bottom: 1px solid #d4af37;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const Information = styled.h3`
  color: ${(props) => (props.price > 0 ? '#006400' : '#fffff0')};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
`;

export const ButtonDetail = styled(motion.button)`
  border: 2px solid #fffff0;
  color: #fffff0;
  background: #d4af37;
  padding: 7px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 12px;
  width: 150px;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: -5;
  right: 9px;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;

  .search {
    font-size: 22px;
    color: #fffff0;
  }
`;
