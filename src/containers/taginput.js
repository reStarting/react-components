import React from 'react'
import ReactDom from 'react-dom'
import TagInput from '../components/taginput.js'

ReactDom.render(
  <div>
    <TagInput autofocus={true} width={500} value={['react', 'redux']} />
  </div>,
  document.getElementById("root")
)