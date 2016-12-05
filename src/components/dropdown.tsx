import * as React from 'react';

const dropdownStyle = {
	margin:0,
	padding: 0,
	listStyle: 'none',
	minWidth: 200,
	position: 'absolute',
	border: '1px solid red'
}

interface DropDownProps {
    name: string,
    items: string[]
}

export default class DropDown extends React.Component<DropDownProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            items : this.props.items || []
        }
    }

    render() {
        return (
        <ul style={dropdownStyle}>
            {
                this.renderItem()
            }
        </ul>
        );
    }
    renderItem() {
		return this.state.items.map( item => {
			return (
				<li><span>{item}</span></li>
			)
		});
    }
}
