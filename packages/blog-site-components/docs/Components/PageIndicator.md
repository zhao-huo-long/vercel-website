---
nav:
  title: Components
  order: 1
---

# PageIndicator
## DEMO
```tsx
import { PageIndicator } from 'blog-site-components'
import React from 'react'

const style = {
  // display: 'flex',
  // gap: '20px'
}

export default () => {
  return <div style={style}>
    <PageIndicator 
      next={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}} 
      pre={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}}
      />
    <PageIndicator 
      next={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}} 
      // pre={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}}
      />
    <PageIndicator 
      // next={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}} 
      pre={{href: 'https//baidu.com', title: '猫咪趁主人睡觉开闸放水淹了家'}}
      />
  </div>
}
```
<API src="../../src/PageIndicator/index.tsx"></API>
