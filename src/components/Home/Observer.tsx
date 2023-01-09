import React, { RefObject } from 'react';
interface ObserverObject extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  target: React.LegacyRef<HTMLDivElement>;
  height?: number | string;
  width?: number | string;
}

function Observer({ target, height = 400, width = '100%', ...resProps }: ObserverObject) {
  return <div ref={target} style={{ height, width }} {...resProps}></div>;
}

export default Observer;
