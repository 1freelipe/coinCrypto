import styled from 'styled-components';

export const DivInformation = styled.div`
  width: 100%;
  padding: 10px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;
export const DivWrapperInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-bottom: 1px solid #d4af37;
`;

export const Information = styled.h3`
  color: ${(props) => (props.price > 0 ? '#006400' : '#fffff0')};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
`;
