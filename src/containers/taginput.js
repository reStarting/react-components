import React from 'react'
import TagInput from '../components/taginput.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TagInput autofocus={true} width={500} value={['react', 'redux']} />
      </div>
    );
  }
}