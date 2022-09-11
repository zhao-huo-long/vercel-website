import React from 'react'
import type { FC } from 'react'

type Value = {
  desc: string,
  time: string,
}

export interface TimelineProps {
  value: Value[];
  onClick: (value: Value) => void;
  /** 样式 */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}


const Timeline: FC<TimelineProps> = () => {
  return <div>123</div>
}


export default Timeline
