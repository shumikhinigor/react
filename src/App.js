import Welcome from './Welcome/Welcome'
import Car from './Car/Car';
import classes from './App.module.sass';
import React from "react";

class App extends React.Component {
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
	}

	onClickClearSelectedCarsHandler = () => {
		const cars = this.state.cars.map(car => {
			car.selected = false
			return car
		})
		this.setState({ cars })
	}
	onClickSelectCarHandler = selectedCar => {
		const cars = this.state.cars.map(car => {
			car.selected = car.id === selectedCar.id ? car.selected = !car.selected : car.selected
			return car
		})
		this.setState({ cars })
	}
	onClickDeleteCarHandler = deletedCar => {
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
			year: year.match(/\d+((?=-))/)[0],
			selected: false
		})
		this.setState({ cars })
		clearForm()
	}

	render() {
		const { cars } = this.state
		const selectedCars = cars.filter(car => car.selected).map(({ name }) => name).join(', ')
		const listCars = cars.map(car => <Car
			key={ car.id.toString() }
			name={ car.name }
			year={ car.year }
			selected={ car.selected }
			onSelectCar={ this.onClickSelectCarHandler.bind(this, car) }
			onDeleteCar={ this.onClickDeleteCarHandler.bind(this, car) }
		/>)

		return (
			<div className={ classes.App }>
				<header className={ classes['App-header'] }>
					<Welcome />

					<form onSubmit={ this.onSubmitFormHandler } name="form">
						<input type="text" name="name" required />
						<br />
						<input type="month" name="year" required />
						<br />
						<button type="submit">Add</button>
					</form>

					{ selectedCars && <p><span style={{ fontWeight: 'bold' }}>Selected Cars: </span>{ selectedCars }</p> }

					{ listCars && <div className={ classes['App-cars'] }>{ listCars }</div> }

					<button onClick={ this.onClickClearSelectedCarsHandler } disabled={ !selectedCars.length }>Clear selected cars</button>
				</header>
			</div>
		)
	}
}

export default App;
