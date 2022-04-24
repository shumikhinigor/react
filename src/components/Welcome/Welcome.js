import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Welcome.module.sass';

class Welcome extends Component {
	render() {
		return (
			<Auxiliary>
				<h2 className={ classes.Welcome }>
					Welcome, { this.props.name || 'Guest' }
				</h2>
			</Auxiliary>
		)
	}
}

export default Welcome