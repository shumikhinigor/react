import { Component } from 'react'
import classes from './MenuToggle.module.sass'

class MenuToggle extends Component {
	render() {
		const iconClasses = [
			'fa',
			classes.MenuToggle
		]
		if (this.props.isOpen) iconClasses.push('fa-times', classes.open)
		else iconClasses.push('fa-bars')

		return (
			<i
				className={ iconClasses.join(' ') }
				onClick={ this.props.onToggle }
			/>
		)
	}
}

export default MenuToggle