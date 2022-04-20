import { Component } from "react";
import classes from './Welcome.module.sass';

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = { name: props.name || 'Guest' }
	}
	render() {
		return (
			<h2 className={ classes.Welcome }>
				Welcome, { this.state.name }
			</h2>
		)
	}
}

export default Welcome