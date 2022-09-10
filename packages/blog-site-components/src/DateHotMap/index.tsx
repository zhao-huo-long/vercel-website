import React from 'react'
import type { FC } from 'react'
import './styles.less'
import classnames from 'classnames'
import { genDateAry } from '@/utils'

export type Level = 0 | 1 | 2 | 3 | 4

export interface DateHotMapProps {
  /** 样式 */
  style?: React.CSSProperties;
  /** 类名 */
  className?: string;
  /** YYYY-MM-DD */
  startDate?: `${string}-${string}-${string}`;
  /** YYYY-MM-DD */
  endDate?: `${string}-${string}-${string}`;
  /** 高亮颜色 0 / 1 / 2 / 3 / 4 */
  genLevel?: (date?: string) => Level;
  /** title */
  title?: (date?: string) => string | undefined;
}

const level = Array.from({ length: 5 }).map((_, index) => `date-hot-map-l${index}`);


const DateHotMap: FC<DateHotMapProps> = (props) => {
  const {
    style,
    className,
    startDate,
    endDate,
    genLevel,
    title,
  } = props
  const compCls = classnames(className, 'date-hot-map')
  const dateAry = startDate && endDate ? genDateAry(startDate, endDate) : []

  return <div className={compCls} style={style}>
    {
      dateAry.map((week, index) => {
        return (
          <div key={index} className='date-hot-map-week-section'>
            {
              week.map(day => <div
                key={day}
                title={title?.(day) || day}
                className={classnames('date-hot-map-day-box', level[genLevel?.(day) || 0])}
              />)
            }
          </div>
        )
      })
    }
  </div>
}

export default DateHotMap
