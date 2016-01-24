import React, {PropTypes} from 'react';
import AutoSizeInput from './autosizeinput';
import '../styles/taginput.less'

let index = 0;

function uid() {
  return 'tag' + (++index);
}

export default class TagInput extends React.Component {
  static propTypes = {
    autofocus: PropTypes.bool
  };
  static defaultProps = {
    autofocus: false
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: ['react', 'redux', 'js']
    }
  }

  componentDidMount() {
    this.props.autofocus && this.focus();
  }

  onKeyDown(e) {
    if( e.keyCode == 13 ) //enter
    {
      const value = e.target.value
      if(value.trim() == '') return;
      const tags = this.state.tags;
      this.clear();
      this.setState({
        tags: [...tags, value]
      })
    }
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

  render() {
    return (
      <span {...this.props} className="taginput">
        {
          this.renderTags()
        }
      	<AutoSizeInput onKeyDown={this.onKeyDown.bind(this)} ref="input" value="taginput" />
      </span>
    );
  }
  renderTags() {
    return this.state.tags.map(tag => {
      return (
        <span className="taginput-tag" key={uid()}>{tag}</span>
      )
    })
  }
}
