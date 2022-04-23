import React, { Component } from 'react'
import classes from './About.module.sass'

class About extends Component {
	render() {
		return (
			<div className={ classes.About }>
				<h2>This is a learning project</h2>
			</div>
		)
	}
}

export default About