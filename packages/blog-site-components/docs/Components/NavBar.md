---
nav:
  title: Components
  order: 1
---

# NavBar
## DEMO
```tsx
import React from 'react'
import { NavBar } from 'blog-site-components'

const style = {
  display: 'flex',
  gap: '20px'
}

export default () => {
  return <div style={style}>
    <NavBar navMenu={[
      {
        name: '首页',
        path: '/'
      }
    ]}></NavBar>
  </div>
}
```
<API src="../../src/NavBar/index.tsx"></API>
