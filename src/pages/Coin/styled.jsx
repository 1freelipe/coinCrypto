import styled from 'styled-components';

export const SecondMain = styled.main`
  background: #242124;
  padding: 10px;
  position: relative;
  height: 100vw;
`;

export const Divtop = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;

export const DivName = styled.div`
  width: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameCoin = styled.h1`
  color: #fffff0;
  font-family: 'Kanit', sans-serif;
  font-weight: 800;
  font-style: normal;
  text-transform: uppercase;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 700px;
`;

export const ContainerChart = styled.div`
  width: 1350px;
  height: 700px;
  position: relative;
  margin-left: 25px;
  border-radius: 9px;
  border: 1px solid #4052d6;
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
  height: 150px;
  border-radius: 9px;
  border: 1px solid #4052d6;
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
