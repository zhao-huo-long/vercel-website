import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'

export interface CardProps {
  /** 默认插槽 */
  children?: React.ReactNode,
  /** 样式 */
  style?: React.CSSProperties, // string 支持识别 TypeScript 可选类型为非必选属性
  /** className */
  className?: string
}

const Card: FC<CardProps> = (props) => {
  const { children, className, ...restProps } = props
  const cls = classnames(className, 'site-card')
  return <div className={cls} {...restProps}>
    {children}
  </div>
}

export default Card
