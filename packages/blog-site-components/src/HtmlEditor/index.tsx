import React, { useEffect, useState } from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

interface HtmlEditorProps {
  initContent?: () => Promise<string>
  onChange?: (content: string) => void
}

const HtmlEditor: React.FC<HtmlEditorProps> = (props) => {
  const { initContent, onChange } = props
  const [content, setContent] = useState(BraftEditor.createEditorState(null))
  useEffect(() => {
    let cancel = false
    const ajax = async () => {
      const res = await initContent?.()
      if(cancel){
        return
      }
      setContent(BraftEditor.createEditorState(res))
    }
    ajax()
    return () => {
      cancel = true
    }
  }, [])
  return <BraftEditor
    value={content}
    onChange={(editorState) => {
      setContent({ editorState })
      const htmlContent = editorState?.toHTML()
      onChange?.(htmlContent)
    }}
  />
}

export default HtmlEditor
