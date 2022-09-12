import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'
import Card from '../Card'
import Link from '../Link'

interface ArticleProps{
  /** 默认插槽 */
  children?: React.ReactNode,
  /** 样式 */
  style?: React.CSSProperties, // string 支持识别 TypeScript 可选类型为非必选属性
  /** className */
  className?: string,
  coverImg?: string,
  title?: string,
  desc?: React.ReactNode,
  href?: string
}


const ArticleCard: FC<ArticleProps> = (props) => {
  const { children, href, coverImg, title, className, desc, ...restProps } = props
  const cls = classnames(className, 'article-card')
  const cover = coverImg && <div className='article-card-cover'>
    <img src={coverImg} alt={title || 'img'} />
  </div>
  const titleJSX = title && <div className='article-card-title'>
    <Link href={href}>{title}</Link>
  </div>
  const descJSX = desc && <div className='article-card-desc'>{desc}</div>
  return <Card className={cls} {...restProps}>
    {cover}
    {titleJSX}
    {descJSX}
  </Card>
}


export default ArticleCard
