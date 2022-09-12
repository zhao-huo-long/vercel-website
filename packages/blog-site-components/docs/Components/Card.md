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
      <img style={{marginTop: 10, alignSelf: 'start'}} width="200px" 
        src="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF" alt="img" />
    </Card>
    <Card style={{ alignSelf: 'start'}}>
      <img width="200px" 
        src="https://t7.baidu.com/it/u=2642405278,1292283273&fm=193&f=GIF" alt="img" />
    </Card>
  </div>
}
```
<API src="../../src/Card/index.tsx"></API>
