import React, { Component } from 'react'
import classes from './Auth.module.sass'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import is from 'is_js'

class Auth extends Component {

	constructor(props) {
		super(props)

		this.state = {
			form: {
				email: {
					value: '',
					type: 'email',
					label: 'Email',
					error: 'Please enter a valid email',
					valid: false,
					validation: {
						required: true,
						email: true
					}
				},
				password: {
					value: '',
					type: 'password',
					label: 'Password',
					error: 'Please enter a valid password',
					valid: false,
					validation: {
						required: true,
						minLength: 6
					}
				}
			}
		}
	}

	validate = (value, validation) => {
		if (!validation) return true

		let isValid = true
		const { required, email, minLength } = validation

		if (required) isValid = value.trim()
		if (email) isValid = is.email(value)
		if (minLength) isValid = value.length >= minLength

		return isValid
	}
	onChangeInputHandler = (event, name) => {
		const { value } = event.target
		const form = { ...this.state.form }
		const { [name]: { ...input } } = { ...form }
		input.value = value
		input.valid = this.validate(input.value, input.validation)

		form[name] = input
		this.setState({ form })
	}
	onLoginHandler = () => {
		console.log('loginHandler')
	}
	onRegisterHandler = () => {
		console.log('registerHandler')
	}
	onSubmitHandler = event => {
		console.log('onSubmitHandler')
		event.preventDefault()
	}

	render() {
		const inputs = Object.keys(this.state.form).map((name, index) => {
			const input = this.state.form[name]
			return (
				<Input
					key={ name + index }
					type={ input.type }
					value={ input.value }
					valid={ input.valid }
					label={ input.label }
					error={ input.error }
					shouldValidate={ !!input.validation }
					onChange={ event => this.onChangeInputHandler(event, name) }
				/>
			)
		})

		return (
			<div className={ classes.Auth }>
				<div>
					<h1>Authorization</h1>

					<form
						className={ classes['Auth-form'] }
						onSubmit={ this.onSubmitHandler }
					>
						{ inputs.length ? inputs : null }

						<Button type={ 'success' } onClick={ this.onLoginHandler }>Log in</Button>
						<Button type={ 'primary' } onClick={ this.onRegisterHandler }>Register</Button>
					</form>
				</div>
			</div>
		)
	}
}

export default Auth