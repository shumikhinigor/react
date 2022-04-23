import React, { Component } from 'react'
import classes from './Auth.module.sass'
import Button from '../../components/UI/Button/Button'

class Auth extends Component {

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
		return (
			<div className={ classes.Auth }>
				<div>
					<h1>Authorization</h1>

					<form
						className={ classes['Auth-form'] }
						onSubmit={ this.onSubmitHandler }
					>
						<input type="text" />
						<input type="text" />

						<Button
							type={ 'success' }
							onClick={ this.onLoginHandler }
						>Log in</Button>

						<Button
							type={ 'primary' }
							onClick={ this.onRegisterHandler }
						>Register</Button>
					</form>
				</div>
			</div>
		)
	}
}

export default Auth