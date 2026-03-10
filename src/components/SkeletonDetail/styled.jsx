import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonBase = styled.div`
  background: #888;
  background-image: linear-gradient(
    to right,
    #888 0%,
    #777 20%,
    #888 60%,
    #777 100%
  );
  background-repeat: no-repeat;
  background-size: 1970px 700px;
  display: inline-block;
  position: relative;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;

  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
`;

export const SkeletonCard = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  border: 2px solid #1d2126;
  background-color: #0f1214;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
