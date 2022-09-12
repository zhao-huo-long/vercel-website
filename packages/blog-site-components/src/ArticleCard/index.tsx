import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'
import Card from '../Card'
import Link from '../Link'
import Tag from '../Tag'

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
  href?: string,
  time?: string,
  words?: number,
  views?: number,
  tags?: string[]
}


const ArticleCard: FC<ArticleProps> = (props) => {
  const {
    children,
    href,
    coverImg,
    time,
    title,
    className,
    desc,
    words = 0,
    views = 0,
    tags = [],
    ...restProps
  } = props
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
    <div className='article-card-tag'>
      {tags?.map(i => <Tag key={i}>{i}</Tag>)}
    </div>
    {descJSX}
    <div className='article-card-bottom'>
      <div className='article-card-time'>
        {time}
      </div>
      <div className='article-card-msg'>
        <span>
          words: {words}
        </span>
        <span>
          views: {views}
        </span>
      </div>
    </div>
  </Card>
}


export default ArticleCard
