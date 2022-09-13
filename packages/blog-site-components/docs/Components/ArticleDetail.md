---
nav:
  title: Components
  order: 1
---

# ArticleDetail
## DEMO
```tsx
import { ArticleDetail } from 'blog-site-components'
import React from 'react'

const style = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  width: '100%'
}

export default () => {
  return <div style={style}>
    <ArticleDetail 
      tags={['HTML', 'JavaScript', 'CSS', 'React']}
      desc="#李易峰多次嫖娼被行政拘留#【#北京警方通报李易峰多次嫖娼#】据@平安北京 ：近期，北京警方在侦破一起违法犯罪案件中，将演员李某某（男，35岁）查获，该人对多次嫖娼的违法事实供认不讳，其已被依法予以行政拘留。记者通过权威渠道了解到，李某某为李易峰。（总台记者陈雷 赵学荣 王小节 许梦哲"
      title="中秋节，赏月必不可少。在不同地方、不同场景下，看到的月亮有什么不一样呢？打开这幅赏月地图，一起云赏月。"     
      coverImg="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF">
    </ArticleDetail>
  </div>
}
```
<API src="../../src/ArticleDetail/index.tsx"></API>
