---
nav:
  title: Components
  order: 1
---

# Timeline
## DEMO
```tsx
import { Timeline } from 'blog-site-components'
import React from 'react'
import { Card } from 'blog-site-components'
import { Link } from 'blog-site-components'

const style = { 
  overflow: 'hidden',     
  width: 200,
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  borderTop: '10px solid #fff',
  borderBottom: '10px solid #fff',
  fontSize: 14,
}

export default () => {
  const [order, setOrder] = React.useState()
  return (
  <>
    <div onChange={e => {
      e.persist()
      setOrder(e.target.value)
    }} style={{marginBottom: '20px'}}>
      <input type="radio" name="order" defaultChecked value="void 0" /> 默认
      <input type="radio" name="order" value="ascending" />升序
      <input type="radio" name="order" value="descending" />降序
    </div>
    <Card>
      <Timeline order={order}>
        <Timeline.Item value="2022-08-01 22:00:01">
          <div style={style}>
            <Link href="https://www.baidu.com">
              中秋节，赏月必不可少。在不同地方、不同场景下，看到的月亮有什么不一样呢？打开这幅赏月地图，一起云赏月。          
            </Link>
          </div> 
        </Timeline.Item>
        <Timeline.Item value="2022-02-11">
          <div style={style}>
            <Link href="https://www.baidu.com">
              福建的海，可以有多牛？
            </Link>
          </div> 
        </Timeline.Item>
        <Timeline.Item value="2021-01-01">
          <div style={style}>
            <Link href="https://www.baidu.com">          
              日本的台风警报，却把韩国网民气坏了
            </Link>
          </div> 
        </Timeline.Item>
        <Timeline.Item value="2019-02-01">
          <div style={style}>
            <Link href="https://www.baidu.com">          
              一人、一伞、一飞旋、一肃立，随着鼓乐声起伏，漫天雨落如幕；舞者们撑起油纸伞，涉水而行、作凌波微步，一时间水花飞溅，俯仰间又归于平静。这一幕幕动与静、力与美的视觉盛宴，分享给你
            </Link>
          </div> 
        </Timeline.Item>
        <Timeline.Item value="2022-09-11">
          <div style={style}>
            <Link href="https://www.baidu.com">                    
              精工钢构：将以EPC模式承建新昌县小球中心项目，中标金额7.86亿元
            </Link>
          </div> 
        </Timeline.Item>
        <Timeline.Item value="2022-05-01">
          <div style={style}>
            <Link href="https://www.baidu.com">                    
              亚运故事会丨花式跳伞开场，威风锣鼓震天，北京亚运会开幕式，大型团体操的巅峰.
            </Link>
          </div> 
        </Timeline.Item>
      </Timeline>
    </Card>
  </>
  )
}
```


<API src="../../src/Timeline/index.tsx"></API>
