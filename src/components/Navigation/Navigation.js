import { Component } from 'react'
import classes from './Navigation.module.sass'

class Navigation extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation