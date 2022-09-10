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

export default () => {
  const [, setState] = React.useState({})
  console.log('sss')
  return <div style={{
    display: 'flex',
    gap: '20px'
  }}>
    <Card onClick={() => setState({})} className="test">
      my card box
    </Card>
    <Card style={{color: 'red'}}>
      my card box
    </Card>
  </div>
}
```
<API src="../../src/Card/index.tsx"></API>
