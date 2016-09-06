import React from 'react'

const dropdownStyle = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  minWidth: 200,
  position: 'absolute',
  border: '1px solid red'
}

const dropdownitemStyle = {
  background: '#eee'
}

export default class DropDown extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    items: React.PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      items: this.props.items || []
    }
  }

  render () {
    return (
      <ul style={dropdownStyle}>
        {this.renderItem()}
      </ul>
    )
  }
  renderItem () {
    return this.state.items.map((item, idx) => {
      return (
        <li key={'dropdownitem' + idx} style={dropdownitemStyle}>
          <span>{item}</span>
        </li>
      )
    })
  }
}
