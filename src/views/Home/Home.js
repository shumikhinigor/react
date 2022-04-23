import { Component } from 'react'
import classes from './Home.module.sass'
import Welcome from '../../components/Welcome/Welcome'
import logo from '../../logo.svg'

class Home extends Component {
	render() {
		return (
			<div className={ classes.Home }>
				<img
					src={ logo }
					className={ classes['Home-logo'] }
					alt="logo"
				/>
				<Welcome />
			</div>
		)
	}
}

export default Home