import React from 'react';

class Welcome extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: props.name || 'Guest' }
	}
	render() {
		const style = { margin: 0 }
		return (
			<h2 style={ style }>
				Welcome, { this.state.name }
			</h2>
		)
	}
}

export default Welcome