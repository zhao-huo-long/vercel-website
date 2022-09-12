---
nav:
  title: Components
  order: 1
---

# ArticleCard
## DEMO
```tsx
import { ArticleCard } from 'blog-site-components'
import React from 'react'

const style = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  width: '100%'
}

export default () => {
  return <div style={style}>
    <ArticleCard 
      style={{width: 'calc(50% - 10px)'}}
      desc="#李易峰多次嫖娼被行政拘留#【#北京警方通报李易峰多次嫖娼#】据@平安北京 ：近期，北京警方在侦破一起违法犯罪案件中，将演员李某某（男，35岁）查获，该人对多次嫖娼的违法事实供认不讳，其已被依法予以行政拘留。记者通过权威渠道了解到，李某某为李易峰。（总台记者陈雷 赵学荣 王小节 许梦哲"
      title="中秋节，赏月必不可少。在不同地方、不同场景下，看到的月亮有什么不一样呢？打开这幅赏月地图，一起云赏月。"     
      coverImg="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF">
    </ArticleCard>
    <ArticleCard 
      style={{width: 'calc(50% - 10px)'}}
      desc="英国女王和她的📷，鏡頭後面的女王是這樣。英国🇬🇧 女王最爱徕卡M3，禄来35旁轴/禄来双反中画幅！英国女王伊丽莎白二世不仅是英国历史上在位时间最长的君主，还是一名摄影爱好者。在很多的图片里，我们都能看到携带相机的伊丽莎白，据说她随拍时使用Rollei 35，而当遇到“重要的拍摄”时，这位英国女王会使用她的徕卡M3。"
      title="『英国女王伊丽莎白二世和她的相机日常📷』"     
      coverImg="https://wx3.sinaimg.cn/mw2000/6aeee087gy1h61hciryntj20ku0psgqi.jpg">
    </ArticleCard>

    <ArticleCard 
      style={{width: 'calc(50% - 10px)'}}
      desc="英国女王和她的📷，鏡頭後面的女王是這樣。英国🇬🇧 女王最爱徕卡M3，禄来35旁轴/禄来双反中画幅！英国女王伊丽莎白二世不仅是英国历史上在位时间最长的君主，还是一名摄影爱好者。在很多的图片里，我们都能看到携带相机的伊丽莎白，据说她随拍时使用Rollei 35，而当遇到“重要的拍摄”时，这位英国女王会使用她的徕卡M3。"
      title="『英国女王伊丽莎白二世和她的相机日常📷』"     
      coverImg="https://wx3.sinaimg.cn/mw2000/6aeee087gy1h61hciryntj20ku0psgqi.jpg">
    </ArticleCard>
  </div>
}
```
<API src="../../src/ArticleCard/index.tsx"></API>
