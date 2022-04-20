import { Component } from 'react'
import classes from './Button.module.sass'

class Button extends Component {
	render() {
		const ButtonClasses = [
			classes.Button,
			classes[this.props.type]
		]
		return (
			<button
				onClick={ this.props.onClick }
				className={ ButtonClasses.join(' ') }
				disabled={ this.props.disabled }
			>
				{ this.props.children }
			</button>
		)
	}
}

export default Button