import React from 'react'
import type { FC } from 'react'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
import classnames from 'classnames'
import './styles.less'

dayjs.extend(relativeTime)

type Value = {
  desc: string,
  time: string,
}

export interface TimelineProps {
  /** 样式 */
  style?: React.CSSProperties;
  /** className */
  className?: string;
  /** children */
  children?: React.ReactNode,

  /** 升序/降序 */
  order?: 'ascending' | 'descending'
}

export interface ItemProps {
  children?: React.ReactNode;
  value: string;
}

const Item: FC<ItemProps> = (props) => {
  const { children, value } = props
  return <div>
    <div className='timeline-top'>
      <div className='timeline-dot' />
      <span>{dayjs(value).from(dayjs())}</span>
    </div>
    <div className='timeline-desc'>
      {children}
    </div>
  </div>
}

export interface Timeline extends FC<TimelineProps> {
  Item: FC<ItemProps>
}

const Timeline: FC<TimelineProps> = (props) => {
  const { children, className, order, ...restProps } = props
  if (Array.isArray(children) && order) {
    const childrenShadow = [...children]
    if (order === 'ascending') {
      childrenShadow.sort((a, b) => dayjs(a.props.value).unix() - dayjs(b.props.value).unix())
    }
    if (order === 'descending') {
      childrenShadow.sort((b, a) => dayjs(a.props.value).unix() - dayjs(b.props.value).unix())
    }
    return <div
      className={classnames(className, 'timeline')}
      {...restProps} >
      {childrenShadow}
    </div>
  }
  return <div
    className={classnames(className, 'timeline')}
    {...restProps} >
    {children}
  </div>
}

(Timeline as Timeline).Item = Item

export default Timeline as Timeline
