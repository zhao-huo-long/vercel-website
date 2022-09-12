---
nav:
  title: Components
  order: 1
---

# Card
## DEMO
```tsx
import { Card } from 'blog-site-components'
import React from 'react'

const style = {
  display: 'flex',
  gap: '20px',
}

export default () => {
  return <div style={style}>
    <Card title="卡片" className="test">
      <img         
        height="200px"
        style={{marginTop: 10, objectFit: 'cover'}} 
        width="280px" 
        src="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF" alt="img" />
    </Card>
    <Card style={{ alignSelf: 'start'}}>
      <img 
        width="280px" 
        height="200px"
        style={{ objectFit: 'cover'}} 
        src="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF" alt="img" />
    </Card>
  </div>
}
```
<API src="../../src/Card/index.tsx"></API>
