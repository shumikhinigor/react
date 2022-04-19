import React from 'react';
import Radium from "radium";
import './Car.css'

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
		const carClasses = [ 'Car' ]
		if (this.props.selected) carClasses.push('selected')
		// Radium :hover
		const hover = { ':hover': { boxShadow: '0px 3px 5px white' } }

		return (
			<div className={ carClasses.join(' ') } style={ hover }>
				<button className={ 'delete' } type="button" onClick={ this.state.onDeleteCar }>&#10006;</button>
				<h3 className={ 'name' }>Сar name: { this.state.name }</h3>
				<p className={ 'year' }>Year: <strong>{ this.state.year }</strong></p>
				<button type="button" onClick={ this.state.onSelectCar }>Select</button>
			</div>
		)
	}
}

Car = Radium(Car)

export default Car