import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TagInput from '../components/taginput'

ReactDOM.render(
  <div>
    <TagInput autofocus={true} width={500} value={['react', 'redux']} />
  </div>,
  document.getElementById("root")
)