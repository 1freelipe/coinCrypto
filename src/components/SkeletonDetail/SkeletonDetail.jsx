import React from 'react';
import { SkeletonBase, SkeletonCard } from './styled';

export default function LoadingSkeletonDetail() {
  return (
    <SkeletonCard>
      {/* <SkeletonBase width="80%" height="25px" borderRadius="4px" />
      <SkeletonBase width="80%" height="25px" borderRadius="4px" /> */}

      <SkeletonBase
        style={{
          width: '100%',
          display: 'flex',
          gap: '20px',
          background: 'transparent',
        }}
      >
        <SkeletonBase
          width="77%"
          height="700px"
          style={{ borderRadius: '12px' }}
        />

        <SkeletonBase
          width="25%"
          height="700px"
          style={{ borderRadius: '12px' }}
        />
      </SkeletonBase>

      <div
        width="100%"
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        <SkeletonBase width="450px" height="250px" borderRadius="12px" />
        <SkeletonBase width="450px" height="250px" borderRadius="12px" />
        <SkeletonBase width="450px" height="250px" borderRadius="12px" />
        <SkeletonBase width="450px" height="250px" borderRadius="12px" />
      </div>
    </SkeletonCard>
  );
}
