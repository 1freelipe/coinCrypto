import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0; /* Espaço para não grudar nos cards */
  width: 100%;
  margin: 0 auto;

  button {
    padding: 10px 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    background-color: #d4af37;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #bc13fe;
      border-color: #fffff0;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      color: #252525;
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #fffff0;
  }
`;
