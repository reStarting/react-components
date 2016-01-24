import React from 'react'
import TagInput from '../components/taginput.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TagInput autofocus={true} style={{width: 500}} />
      </div>
    );
  }
}