import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'

export interface LinkProps {
  /** 默认插槽 */
  children?: string,
  /** 样式 */
  style?: React.CSSProperties, // string 支持识别 TypeScript 可选类型为非必选属性
  /** className */
  className?: string,
  href?: string,
}

const Link: FC<LinkProps> = (props) => {
  const { children, className, href, ...restProps } = props
  const cls = classnames(className, 'link')
  return <a href={href} className={cls} {...restProps}>
    {children}
  </a>
}

export default Link
