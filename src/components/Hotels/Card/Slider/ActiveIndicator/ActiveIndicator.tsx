import React from 'react';
import activeIndicatorStyles from './activeIndicator.module.scss';
export interface ActiveIndicatorProps {
  values: number[];
  active: number;
  setActiveValue: Function;
}
function ActiveIndicator({ values, setActiveValue, active }: ActiveIndicatorProps) {
  return (
    <div className={activeIndicatorStyles.indicator_container}>
      {values.map((value, key) => (
        <div
          key={key}
          onClick={setActiveValue(value)}
          className={value == active ? activeIndicatorStyles.indicator__active : activeIndicatorStyles.indicator}
        ></div>
      ))}
    </div>
  );
}

export default ActiveIndicator;
