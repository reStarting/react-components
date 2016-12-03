import * as React from 'react';

const iptstyle = {
  verticalAlign: 'text-top',
  margin:0,
  padding:0,
  border: 0,
  outline: 0
}

const sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };
const nextFrame = typeof window !== 'undefined' ? (function(){
	return window.requestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})().bind(window) : undefined;


interface AutoSizeInputProps {
    value: string,
    autofocus: boolean,
    onChange: (e: Event) => {},
    style: Object,
    width: number,
    [prop: string]: any
}

export default class AutoSizeInput extends React.Component<AutoSizeInputProps, any> {
	static defaultProps = {
		autofocus: false
	};
    constructor(props) {
        super(props);
        this.state = {
            width: 1,
            value: this.props.value || ''
        }
    }
    componentDidMount() {
        this.updateInputWidth()
        this.props.autofocus && this.focus();
    }
    componentDidUpdate() {
        nextFrame(this.updateInputWidth.bind(this))	
    }
    updateInputWidth() {
        const width = this.refs.sizer.scrollWidth + 1;
        if(this.state.width != width)
        {
            this.copyStyle();
            this.setState({
                width
            });
        }
    }
    onValueChange(e) {
        const value = e.target.value;
        this.setState({
            value
        })
        if(this.props.onChange) this.props.onChange(e);
    }
    copyStyle() {
        const {input, sizer} = this.refs;
        const inputStyle = window.getComputedStyle(input) || input.currentStyle;
        sizer.style.fontSize = inputStyle.fontSize;
            sizer.style.fontFamily = inputStyle.fontFamily;
            sizer.style.fontWeight = inputStyle.fontWeight;
            sizer.style.fontStyle = inputStyle.fontStyle;
            sizer.style.letterSpacing = inputStyle.letterSpacing;
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
        this.getInput().select()
    }
    clear() {
        this.setState({
            value: ''
        })
    }
    render() {
        const {style, ...other} = this.props;
        const inputStyle = Object.assign({width: this.props.width || this.state.width}, iptstyle, style);
        return (
            <span style={{verticalAlign: 'middle'}} ref="wrap">
                <input {...other} ref="input" 
                    value={this.state.value}
                    onChange={this.onValueChange.bind(this)} 
                    style={inputStyle} />
                <div ref="sizer" style={sizerStyle}>{this.state.value}</div>
            </span>
        );
    }
}
