import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {init} from '../actions'
import AutoSizeInput from '../components/autosizeinput.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <AutoSizeInput autofocus={true} value="AutoSizeInput" />
        <br />
        <AutoSizeInput style={{border: '1px solid red'}} value="AutoSizeInput" />
        <br />
        <AutoSizeInput style={{border: '1px solid red'}} width={200} value="Fixed AutoSizeInput" />
      </div>
    );
  }
}

function mapStateToProps(state) 
{
  return state
}

function mapDispatchToProps(dispatch)
{
  return {
    init: bindActionCreators(init, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

