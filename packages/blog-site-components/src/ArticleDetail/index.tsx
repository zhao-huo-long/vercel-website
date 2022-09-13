import React from 'react';
import './styles.less'
import type { FC } from 'react'
import classnames from 'classnames'
import Card from '../Card'
import Link from '../Link'
import Tag from '../Tag'
import dayjs from 'dayjs';

interface ArticleDetailProps {
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
  tags?: string[],
}


const ArticleDetail: FC<ArticleDetailProps> = (props) => {
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
  const cls = classnames(className, 'article-detail')
  const cover = coverImg && <div className='article-detail-cover'>
    <img src={coverImg} alt={title || 'img'} />
  </div>
  const titleJSX = title && <div className='article-detail-title'>
    <Link href={href}>{title}</Link>
  </div>
  const descJSX = desc && <div className='article-detail-desc'>{desc}</div>
  return <Card className={cls} {...restProps}>
    {cover}
    {titleJSX}
    <div className='article-detail-msg'>
      <div>{time || dayjs().format('YYYY/MM/DD')}</div>
      <div>
        约<span> 3 </span>千字
      </div>
      <div className='article-detail-tag'>
        {tags?.map(i => <Tag key={i}>{i}</Tag>)}
      </div>
    </div>
    {descJSX}
    <div className='article-detail-bottom'>
      <div className='article-detail-time'>
        {time}
      </div>
    </div>
  </Card>
}


export default ArticleDetail
