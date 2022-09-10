import React from 'react'
import ReactDom  from 'react-dom'
import app from './app'

ReactDom.render(
  React.createElement(app), 
  document.getElementById("app")
)
