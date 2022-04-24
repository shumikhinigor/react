import React, { Component } from 'react'
import classes from './Input.module.sass'

class Input extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isTouched: false
		}
	}

	onChange = event => {
		this.setState({ isTouched: true })
		this.props.onChange(event)
	}
	isInvalid = () => {
		const { isTouched } = this.state
		const { valid, shouldValidate } = this.props
		return isTouched && (!valid && shouldValidate)
	}

	render() {
		const label = this.props.label
		const value = this.props.value
		const error = this.props.error
		const type = this.props.type || 'text'
		const classesInput = [ classes.Input ]
		const htmlFor = `${ type }-${ Math.random() }`

		if (this.isInvalid()) classesInput.push(classes['Input-invalid'])

		return (
			<div className={ classesInput.join(' ') }>
				<label htmlFor={ htmlFor }>{ label }</label>
				<input
					type={ type }
					id={ htmlFor }
					value={ value }
					onChange={ this.onChange }
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