import React from 'react'
import ReactDom from 'react-dom'
import AutoSizeInput from '../components/autosizeinput.js'


ReactDom.render(
  <div>
    <AutoSizeInput autofocus={true} value="AutoSizeInput" />
    <br />
    <AutoSizeInput style={{border: '1px solid red'}} value="AutoSizeInput" />
    <br />
    <AutoSizeInput style={{border: '1px solid red'}} width={200} value="Fixed AutoSizeInput" />
  </div>,
  document.getElementById("root")
)