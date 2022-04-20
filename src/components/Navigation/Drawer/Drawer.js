import { Component } from 'react'
import classes from './Drawer.module.sass'

class Drawer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [1, 2, 3]
		}
	}

	renderLinks = () => {
		const { links } = this.state
		return links.map((link, index) => {
			return (
				<li key={ index }>
					<a>Link { link }</a>
				</li>
			)
		})
	}

	render() {
		const drawerClasses = [ classes.Drawer ]
		if (!this.props.isOpen) drawerClasses.push(classes.close)
		return (
			<nav className={ drawerClasses.join(' ') }>
				<ul>
					{ this.renderLinks() }
				</ul>
			</nav>
		)
	}
}

export default Drawer