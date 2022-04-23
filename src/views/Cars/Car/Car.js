import React, { Component } from 'react'
import classes from './Car.module.sass'
import withRouter from '../../../hoc/withRouter'

class Car extends Component {
	render() {
		return (
			<div className={ classes.Car }>
				<h1>{ this.props.params.name.toUpperCase() }</h1>
			</div>
		)
	}
}

export default withRouter(Car)