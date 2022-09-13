import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'
import Link from '../Link'

export interface PageIndicatorProps {
  /** 样式 */
  style?: React.CSSProperties, // string 支持识别 TypeScript 可选类型为非必选属性
  /** className */
  className?: string,
  next?: {
    href?: string,
    title?: string
  },
  pre?: {
    href?: string,
    title?: string
  }
}

const PageIndicator: FC<PageIndicatorProps> = (props) => {
  const {className, pre, next, ...restProps } = props
  const cls = classnames(className, 'page-indicator')
  return <div className={cls} {...restProps}>
    <div className='page-indicator-left'>
      {
        pre && <> <span style={{marginRight: '6px'}}>&lt;</span>
        <Link href={pre.href} >{pre.title}</Link> </>
      }
    </div>
    <div className='page-indicator-right'>
      {
        next && <>
          <Link href={next.href} >{next.title}</Link>
          <span style={{marginLeft: '6px'}}>&gt;</span>
        </>
      }
    </div>
  </div>
}

export default PageIndicator
