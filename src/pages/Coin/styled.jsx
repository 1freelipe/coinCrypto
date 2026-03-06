import styled from 'styled-components';

export const SecondMain = styled.main`
  background: #0f1214;
  padding: 10px;
  position: relative;
`;

export const Divtop = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;

export const DivName = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 10;
`;

export const NameCoin = styled.h1`
  color: #fffff0;
  font-family: 'Kanit', sans-serif;
  font-weight: 800;
  font-style: normal;
  text-transform: uppercase;

  &.subtitle {
    font-size: 18px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 700px;
  margin-bottom: 10px;
`;

export const ContainerChart = styled.div`
  width: 1730px;
  height: 700px;
  position: relative;
  margin-left: 25px;
  border-radius: 9px;
  background: #111519;
  border: 2px solid #1d2126;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

export const DivKPI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 10px;
`;

export const KPICard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  background: #111519;
  border: 2px solid #1d2126;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DivArrow = styled.div`
  position: absolute;
  left: -45px;
  top: 50%;
  width: 50px;
  height: 50px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .arrow {
    font-size: 35px;
    color: #fffff0;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
      color: #d4af37;
    }
  }
`;

export const DivGrid = styled.div`
  width: 99.2%;
  height: 220px;
  padding: 5px;
  margin-left: 19px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

export const KPIGrid = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  background: #111519;
  border: 2px solid #1d2126;
`;

export const ContainerAreaChart = styled.div`
  width: 1860px;
  height: 700px;
  position: relative;
  margin-left: 25px;
  border-radius: 9px;
  background: #111519;
  border: 2px solid #1d2126;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
