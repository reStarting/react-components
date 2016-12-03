import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DropDown from '../components/dropdown'

ReactDOM.render(
  <div>
  	<DropDown items={['apple', 'ajax', 'auto', 'array', 'agent']} />
  </div>,
  document.getElementById("root")
)