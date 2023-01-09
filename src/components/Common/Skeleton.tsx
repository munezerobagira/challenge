import React from 'react';
interface SkeletonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  height: number | string;
  width: number | string;
}
function Skeleton({ height, width, ...props }: SkeletonProps) {
  return <div {...props} style={{ background: '#bbbb', width, height }}></div>;
}

export default Skeleton;
