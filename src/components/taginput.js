import React, {PropTypes} from 'react';
import AutoSizeInput from './autosizeinput';

let index = 0;

function uid() {
  return 'tag' + (++index);
}

const wrapStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  border: '2px solid gray',
  padding: 4
}
const tagStyle = {
  float: 'left',
  cursor: 'pointer',
  background: 'gray',
  color: 'white',
  margin: 2,
  padding: '2px 6px',
  borderRadius: 2
}

const inputStyle = {
  float: 'left',
  padding: 3,
  fontSize:16
}

export default class TagInput extends React.Component {
  static propTypes = {
    autofocus: PropTypes.bool,
    value: PropTypes.array
  };
  static defaultProps = {
    autofocus: false,
    value: []
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.value
    }
  }

  componentDidMount() {
    this.props.autofocus && this.focus();
  }

  onKeyDown(e) {
    const value = e.target.value
    if( e.keyCode == 13 ) //enter
    {
      if(value.trim() == '') return;
      this.clear();
      this.pushValue(value)
    }
    else if( e.keyCode == 8 ) //delete
    {
      if(value == '')
      {
        this.popValue();
      }
    }
  }
  onMouseDown(e) {
    if(e.target != this.refs.input.getInput())
    {
      e.preventDefault();
      e.stopPropagation();
    }
    this.focus();
  }

  getInput() {
    return this.refs.input;
  }

  focus() {
    this.getInput().focus();
  }
  blur() {
    this.getInput().blur();
  }
  select() {
    this.getInput().select();
  }
  clear() {
    this.getInput().clear();
  }
  pushValue(value) {
    const tags = this.state.tags;
    this.setState({
      tags: [...tags, value]
    })
  }
  popValue() {
    const tags = this.state.tags;
    this.setState({
      tags: tags.slice(0, tags.length - 1)
    }) 
  }

  render() {
    const {style, width, ...other} = this.props;
    const ws = Object.assign({}, wrapStyle, style, {width});
    return (
      <span {...other} style={ws} onMouseDown={::this.onMouseDown}>
        {
          this.renderTags()
        }
      	<AutoSizeInput style={inputStyle} onKeyDown={::this.onKeyDown} ref="input" value="taginput" />
      </span>
    );
  }
  renderTags() {
    return this.state.tags.map(tag => {
      return (
        <span style={tagStyle} key={uid()}>{tag}</span>
      )
    })
  }
}
