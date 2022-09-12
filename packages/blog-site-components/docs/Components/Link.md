---
nav:
  title: Components
  order: 1
---

# Link
## DEMO
```tsx
import { Link } from 'blog-site-components'
import React from 'react'
import { Card } from 'blog-site-components'

const style = {
  display: 'flex',
  gap: '20px'
}

export default () => {
  return <div style={style}>
    <Card>
      <Link href="/components">/components</Link>
    </Card>
    <Card>
      <Link href="/components/date-hot-map">/components/date-hot-map</Link>
    </Card>
    <Card>
      <Link href="/components/timeline">/components/timeline</Link>
    </Card>
  </div>
}
```
<API src="../../src/Link/index.tsx"></API>
