---
nav:
  title: Components
  order: 1
---

# Card
```tsx
import { Card } from 'blog-site-components'
import React from 'react'

export default () => {
  return <div style={{
    display: 'flex',
    gap: '20px'
  }}>
    <Card className="test">
      my card box
    </Card>
    <Card style={{color: 'red'}}>
      my card box
    </Card>
  </div>
}
```
<API src="../../src/Card/index.tsx"></API>