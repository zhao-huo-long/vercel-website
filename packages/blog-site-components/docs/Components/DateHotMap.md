---
nav:
  title: Components
  order: 1
---

# DateHotMap
## DEMO
```tsx
import { DateHotMap } from 'blog-site-components'
import React from 'react'

const map = {
  '2022-08-01': 20,
  '2022-08-11': 30,
  '2022-06-12': 40,
  '2022-09-15': 40,
  '2022-03-12': 40,
  '2022-02-21': 50,
  '2022-03-16': 20,
  '2022-03-07': 10,
  '2022-02-21': 20,
  '2022-01-01': 30,
  '2022-03-21': 5,
  '2022-05-21': 25,
  '2022-04-21': 15,
  '2022-02-14': 5,
  '2022-04-01': 19,
}

export default () => {
  return <DateHotMap genLevel={(date) => {
    const val = map[date] / 10 
    if(val){
      if(val <= 1 ){
        return 1
      }
      if(val <= 2 ){
        return 2
      }
      if(val <= 3 ){
        return 3
      }
      if(val <= 4 ){
        return 4
      }
      return 4
    }
    return 0
  }}  startDate="2022-01-01" endDate="2022-10-01" />
}
```
<API src="../../src/DateHotMap/index.tsx"></API>
