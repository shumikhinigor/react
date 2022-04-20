import { Component } from 'react'
import classes from './Button.module.sass'

class Button extends Component {
	render() {
		const buttonClasses = [
			classes.Button,
			classes[this.props.type]
		]
		return (
			<button
				onClick={ this.props.onClick }
				className={ buttonClasses.join(' ') }
				disabled={ this.props.disabled }
			>
				{ this.props.children }
			</button>
		)
	}
}

export default Button