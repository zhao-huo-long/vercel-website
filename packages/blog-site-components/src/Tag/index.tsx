import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'

export interface TagProps {
 /** 样式 */
 style?: React.CSSProperties;
 /** className */
 className?: string;
 /** children */
 children?: string,
 onClick?: (val?: string) => unknown
}

const Tag: FC<TagProps> = (props) => {
  const {style, className, children, onClick, ...restProps} = props
  const cls = classnames(className, 'tag')
  return <span
    onClick={() => onClick?.(children)}
    className={cls}
    style={style}
    {...restProps}>
    <span className='tag-hash'>#</span>
    <span>
      {children}
    </span>
  </span>
}

export default Tag
