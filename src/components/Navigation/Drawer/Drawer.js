import React, { Component, Fragment } from 'react'
import classes from './Drawer.module.sass'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

class Drawer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{ id: 1, to: '/', label: 'List' },
				{ id: 2, to: '/auth', label: 'Authorization' },
				{ id: 3, to: '/quiz-creator', label: 'Create test' }
			]
		}
	}

	render() {
		const drawerClasses = [ classes.Drawer ]
		if (!this.props.isOpen) drawerClasses.push(classes.close)

		const links = this.state.links.map(link => (
			<li key={ link.id }>
				<NavLink
					to={ link.to }
					onClick={ this.props.onClose }
				>{ link.label }</NavLink>
			</li>
		))

		return (
			<Fragment>
				<nav className={ drawerClasses.join(' ') }>
					<ul>
						{ links }
					</ul>
				</nav>
				{ this.props.isOpen && <Backdrop onClick={ this.props.onClose } /> }
			</Fragment>
		)
	}
}

export default Drawer