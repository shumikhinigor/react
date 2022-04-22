import { Component } from 'react'
import classes from './Home.module.sass'
import Welcome from '../../components/Welcome/Welcome'

class Home extends Component {
	render() {
		return (
			<div className={ classes.Home }>
				<Welcome />
			</div>
		)
	}
}

export default Home