import { Component } from 'react'
import classes from './Navigation.module.sass'

class Navigation extends Component {
	render() {
		return (
			<nav className={ classes.Navigation }>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/cars">Cars</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation