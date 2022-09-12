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
  className?: string,
  radius?: boolean,
  title?: React.ReactNode
}

const Card: FC<CardProps> = (props) => {
  const { children, className, title, radius = true, ...restProps } = props
  const cls = classnames(className, 'site-card', {
    'site-card-radius': radius
  })
  const titleJSX = title && <div className='site-card-title'>{title}</div>
  const contentJSX = children && <div className='site-card-content'>{children}</div>
  return <div className={cls} {...restProps}>
    {titleJSX}
    {contentJSX}
  </div>
}

export default Card
