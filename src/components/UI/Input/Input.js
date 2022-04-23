import React, { Component } from 'react'
import classes from './Input.module.sass'

class Input extends Component {

	isInvalid = () => {
		const { valid, touched, shouldValidate } = this.props
		return !valid && shouldValidate && touched
	}

	render() {
		const label = this.props.label
		const value = this.props.value
		const error = this.props.error
		const type = this.props.type || 'text'
		const classesInput = [ classes.Input ]
		const htmlFor = `${ type }-${ Math.random() }`

		// classesInput.push(classes['Input-invalid'])

		return (
			<div className={ classesInput.join(' ') }>
				<label htmlFor={ htmlFor }>{ label }</label>
				<input
					type={ type }
					id={ htmlFor }
					value={ value }
					onChange={ this.props.onChange }
				/>

				{ this.isInvalid()
					? <span>{ error }</span>
					: null
				}
			</div>
		)
	}
}

export default Input