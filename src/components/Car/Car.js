import { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
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

	// Lifecycle
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
		const hover = { ':hover': { boxShadow: this.props.selected ? '0px 3px 5px #61DAFB' : '0px 3px 5px white' } }

		return (
			<div className={ carClasses.join(' ') } style={ hover }>
				<button className={ classes['Car-delete'] } type="button" onClick={ this.state.onDeleteCar } />
				<p className={ classes['Car-name'] }>Сar name: <strong>{ this.state.name }</strong></p>
				<p className={ classes['Car-year'] }>Year: <strong>{ this.state.year }</strong></p>
				<button className={ classes['Car-select'] } type="button" onClick={ this.state.onSelectCar }>{ this.props.selected ? 'Unselect' : 'Select' }</button>
			</div>
		)
	}
}

Car.propTypes = {
	name: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	onSelectCar: PropTypes.func,
	onDeleteCar: PropTypes.func
}

Car = Radium(Car)

export default Car