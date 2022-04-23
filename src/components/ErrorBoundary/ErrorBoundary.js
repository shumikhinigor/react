import React, { Component } from "react";
import classes from './ErrorBoundary.module.sass'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { error: null, errorInfo: null }
	}

	componentDidCatch(error, errorInfo) {
		// Update state so the next render will show the fallback UI.
		this.setState({ error, errorInfo })
	}

	render() {
		if (this.state.errorInfo) return (
			<div className={ classes.Error }>
				<h4 className={ classes['Error-title'] }>Something went wrong</h4>
				<details className={ classes['Error-details'] } style={{ whiteSpace: 'pre-wrap' }}>
					<br />
					{ this.state.error && this.state.error.toString() }
					<br />
					{ this.state.errorInfo.componentStack }
				</details>
			</div>
		)
		return this.props.children
	}
}

export default ErrorBoundary