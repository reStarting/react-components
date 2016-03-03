import React from 'react';
import ReactDom from 'react-dom';
import DropDown from '../components/dropdown.js'

ReactDom.render(
  <div>
  	<DropDown items={['apple', 'ajax', 'auto', 'array', 'agent']} />
  </div>,
  document.getElementById("root")
)