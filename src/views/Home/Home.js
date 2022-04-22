import { Component } from 'react'
import classes from './Home.module.sass'
import Welcome from '../../components/Welcome/Welcome'

class Home extends Component {
	render() {
		return (
			<div className={ classes.Home }>
				<Welcome />
				<h1>Home page</h1>
			</div>
		)
	}
}

export default Home