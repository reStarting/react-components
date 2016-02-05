import React from 'react';
import DropDown from '../components/dropdown.js'

export default class dropdown extends React.Component {
  render() {
    return (
      <div>
      	<DropDown items={['apple', 'ajax', 'auto', 'array', 'agent']} />
      </div>
    );
  }
}
