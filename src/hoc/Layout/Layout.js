import { Component } from 'react'
import classes from './Layout.module.sass'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpenMenu: false
		}
	}
	onToggleMenuHandler = () => {
		this.setState({ isOpenMenu: !this.state.isOpenMenu })
	}
	onClickBackdropHandler = () => {
		this.setState({ isOpenMenu: false })
	}

	render() {
		return (
			<div className={ classes.Layout }>
				<Drawer
					isOpen={ this.state.isOpenMenu }
					onClickBackdrop={ this.onClickBackdropHandler }
				/>
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