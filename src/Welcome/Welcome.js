import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: props.name || 'Guest' }
	}
	render() {
		return (
			<h2 className={ 'Welcome' }>
				Welcome, { this.state.name }
			</h2>
		)
	}
}

export default Welcome