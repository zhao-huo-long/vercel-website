---
nav:
  title: Components
  order: 1
---

# Tag
## DEMO
```tsx
import { Tag } from 'blog-site-components'
import React from 'react'
import { Card } from 'blog-site-components'

const style = {
  display: 'flex',
  gap: '20px'
}

export default () => {
  return <div style={style}>
    <Tag>
      JavaScript
    </Tag>
    <Tag>
      CSS
    </Tag>
    <Tag>
      html
    </Tag>
  </div>
}
```
<API src="../../src/Tag/index.tsx"></API>
