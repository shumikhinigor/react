import { Component } from 'react';
import Auxiliary from '../../common/HOC/Auxiliary';
import classes from './Welcome.module.sass';

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = { name: props.name || 'Guest' }
	}
	render() {
		return (
			<Auxiliary>
				<h2 className={ classes.Welcome }>
					Welcome, { this.state.name }
				</h2>
			</Auxiliary>
		)
	}
}

export default Welcome