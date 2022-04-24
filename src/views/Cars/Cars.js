import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import Car from '../../components/Car/Car'
import classes from './Cars.module.sass'
import withRouter from '../../hoc/withRouter'
import Auxiliary from '../../hoc/Auxiliary'

class Cars extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cars: [
				{
					id: 1,
					name: 'Ford',
					year: 2018,
					selected: false
				},
				{
					id: 2,
					name: 'Audi',
					year: 2016,
					selected: false
				},
				{
					id: 3,
					name: 'Mazda',
					year: 2010,
					selected: false
				}
			]
		}

		this.inputRef = React.createRef()
	}

	// Methods
	onClickClearSelectedCarsHandler = () => {
		const cars = this.state.cars.map(car => {
			car.selected = false
			return car
		})
		this.setState({ cars })
	}
	onClickSelectCarHandler = (selectedCar, event) => {
		event.stopPropagation()
		const cars = this.state.cars.map(car => {
			car.selected = car.id === selectedCar.id ? car.selected = !car.selected : car.selected
			return car
		})
		this.setState({ cars })
	}
	onClickDeleteCarHandler = (deletedCar, event) => {
		event.stopPropagation()
		const cars = this.state.cars.filter(car => car.id !== deletedCar.id)
		this.setState({ cars })
	}
	onSubmitFormHandler = event => {
		event.preventDefault()
		const { elements } = event.target
		const clearForm = () => {
			elements.name.value = ''
			elements.year.value = ''
		}
		const { name: { value: name }, year: { value: year } } = elements
		const { cars } = this.state
		cars.push({
			id: cars.length + 1,
			name,
			year: +year.match(/\d+((?=-))/)[0],
			selected: false
		})
		this.setState({ cars })
		clearForm()
	}

	// Lifecycle
	componentDidMount() {
		this.inputRef.current.focus()
	}

	render() {
		const { cars } = this.state
		const selectedCars = cars.filter(car => car.selected).map(({ name }) => name).join(', ')
		const listCars = cars.map(car =>
			<ErrorBoundary key={ car.id.toString() }>
				<Car
					name={ car.name }
					year={ car.year }
					selected={ car.selected }
					onSelectCar={ this.onClickSelectCarHandler.bind(this, car) }
					onDeleteCar={ this.onClickDeleteCarHandler.bind(this, car) }
				/>
			</ErrorBoundary>
		)

		return (
			<div className={ classes.Cars }>
				<div className={ classes['Cars-form'] }>
					<form onSubmit={ this.onSubmitFormHandler } name="form">
						<input
							ref={ this.inputRef }
							type="text"
							name="name"
							placeholder={ 'Car' }
							required
						/>
						<input type="month" name="year" required />
						<button type="submit">Add</button>
					</form>
				</div>

				{ listCars.length
					? <Auxiliary>
						<hr className={ classes['Cars-line'] } />

						{ selectedCars.length
							? <div className={ classes['Cars-selected'] }>
								<p><strong>Selected Cars: </strong>{ selectedCars }</p>
							</div>
							: null
						}

						<div className={ classes['Cars-list'] }>
							{ listCars }
						</div>

						<button onClick={ this.onClickClearSelectedCarsHandler } disabled={ !selectedCars }>Clear selected cars</button>
					</Auxiliary>
					: null
				}

			</div>
		)

	}
}

export default withRouter(Cars)