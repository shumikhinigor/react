import { Component } from 'react'
import classes from './Layout.module.sass'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpenMenu: false
		}
	}

	onToggleMenuHandler = () => {
		this.setState({
			isOpenMenu: !this.state.isOpenMenu
		})
	}

	render() {
		return (
			<div className={ classes.Layout }>
				<MenuToggle
					onToggle={ this.onToggleMenuHandler }
					isOpen={ this.state.isOpenMenu }
				/>
				<main>
					{ this.props.children }
				</main>
			</div>
		)
	}
}

export default Layout