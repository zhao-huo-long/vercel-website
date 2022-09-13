---
nav:
  title: Components
  order: 1
---

# HtmlEditor
Braft Editor 美观好用的React富文本编辑器.  https://braft.margox.cn/

## DEMO
```tsx
import { HtmlEditor } from 'blog-site-components'
import React from 'react'

export default () => {
  const [content, setContent] = React.useState()
  return <div>
    <div dangerouslySetInnerHTML={{__html: content}} />
    <HtmlEditor initContent={() => Promise.resolve('<p>hello world</p>')} onChange={e => setContent(e)} />
  </div>
}
```
<API src="../../src/HtmlEditor/index.tsx"></API>
