import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PulsingAura = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 140%;
  height: 180%;

  background: radial-gradient(circle, #d4af37 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(35px);
  z-index: 10;
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  font-size: 107px;
  font-weight: 800;
  margin: 0;
  cursor: pointer;
  background: linear-gradient(to right, #fff3ca, #d4af37, #9b781f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Kanit', sans-serif;
  font-weight: 800;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export default function CoinCryptoLogo() {
  return (
    <LogoContainer>
      <PulsingAura
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ x: '-50%', y: '-50%' }}
      />

      <Title
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        CoinCrypto
      </Title>
    </LogoContainer>
  );
}
