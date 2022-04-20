import { Component, Fragment } from 'react'
import classes from './Drawer.module.sass'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Drawer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [1, 2, 3]
		}
	}

	render() {
		const drawerClasses = [ classes.Drawer ]
		if (!this.props.isOpen) drawerClasses.push(classes.close)

		const links = this.state.links.map((link, index) => {
			return (
				<li key={ index }>
					<a>Link { link }</a>
				</li>
			)
		})

		return (
			<Fragment>
				<nav className={ drawerClasses.join(' ') }>
					<ul>
						{ links }
					</ul>
				</nav>
				{ this.props.isOpen && <Backdrop onClick={ this.props.onClickBackdrop } /> }
			</Fragment>
		)
	}
}

export default Drawer