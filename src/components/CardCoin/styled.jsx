import styled from 'styled-components';

export const CardCoin = styled.div`
  width: 100%;
  height: 400px;
  background: #211b15;
  border: 1px solid #bc13fe;
  border-radius: 12px;
  box-shadow: 12px 12px 12px #211b15;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &:hover {
    transform: translateY(-10px) translateX(4px);
    border-color: #ffdf6c;
  }
`;
