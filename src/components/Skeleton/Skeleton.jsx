import React from 'react';
import { SkeletonBase, SkeletonCard } from './styled';

export default function LoadingSkeleton() {
  return (
    <SkeletonCard>
      <SkeletonBase width="60%" height="40px" borderRadius="4px" />
      {/* Imitando a IMAGEM do Pokemon */}
      <SkeletonBase width="200px" height="200px" borderRadius="50%" />

      {/* Imitando o NOME */}
      <SkeletonBase width="80%" height="25px" borderRadius="4px" />
      <SkeletonBase width="80%" height="25px" borderRadius="4px" />

      {/* Imitando os TIPOS (pequenas pílulas) */}
      <div
        width="100%"
        style={{
          display: 'flex',
          gap: '25px',
          justifyContent: 'space-between',
        }}
      >
        <SkeletonBase width="90px" height="20px" borderRadius="2px" />
        <SkeletonBase width="90px" height="20px" borderRadius="2px" />
      </div>

      <SkeletonBase
        width="150px"
        height="30px"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </SkeletonCard>
  );
}
