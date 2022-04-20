import { Component } from "react";
import Radium from "radium";
import classes from './Car.module.sass'

class Car extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.name || 'Car',
			year: props.year || 'Not specified',
			onSelectCar: props.onSelectCar,
			onDeleteCar: props.onDeleteCar
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps')
		return prevState
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldComponentUpdate')
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate')
		return prevState
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	render() {
		// Error Boundary
		// if (Math.random() > 0.7) throw new Error('Car random failed')

		const carClasses = [ classes.Car ]
		if (this.props.selected) carClasses.push(classes['Car-selected'])
		// Radium :hover
		const hover = { ':hover': { boxShadow: this.props.selected ? '0px 3px 5px red' : '0px 3px 5px white' } }

		return (
			<div className={ carClasses.join(' ') } style={ hover }>
				<button className={ classes['Car-delete'] } type="button" onClick={ this.state.onDeleteCar } />
				<h3 className={ classes['Car-name'] }>Сar name: { this.state.name }</h3>
				<p className={ classes['Car-year'] }>Year: <strong>{ this.state.year }</strong></p>
				<button type="button" onClick={ this.state.onSelectCar }>Select</button>
			</div>
		)
	}
}

Car = Radium(Car)

export default Car