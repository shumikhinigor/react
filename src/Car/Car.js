import React from 'react';
import Radium from "radium";
import classes from './Car.module.sass'

class Car extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.name || 'Car',
			year: props.year || 'Not specified',
			onSelectCar: props.onSelectCar,
			onDeleteCar: props.onDeleteCar
		}
	}

	render() {
		const carClasses = [ classes.Car ]
		if (this.props.selected) carClasses.push(classes['Car-selected'])
		// Radium :hover
		const hover = { ':hover': { boxShadow: this.props.selected ? '0px 3px 5px red' : '0px 3px 5px white' } }

		return (
			<div className={ carClasses.join(' ') } style={ hover }>
				<button className={ classes['Car-delete'] } type="button" onClick={ this.state.onDeleteCar }>&#10006;</button>
				<h3 className={ classes['Car-name'] }>Сar name: { this.state.name }</h3>
				<p className={ classes['Car-year'] }>Year: <strong>{ this.state.year }</strong></p>
				<button type="button" onClick={ this.state.onSelectCar }>Select</button>
			</div>
		)
	}
}

Car = Radium(Car)

export default Car