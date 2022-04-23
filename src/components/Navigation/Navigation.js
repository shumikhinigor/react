import React, { Component } from 'react'
import classes from './Navigation.module.sass'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
	render() {
		return (
			<nav className={ classes.Navigation }>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: '/cars', search: '?loaded=true' }}>Cars</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation