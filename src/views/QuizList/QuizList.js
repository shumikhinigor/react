import React, { Component } from 'react'
import classes from './QuizList.module.sass'
import { NavLink } from "react-router-dom";

class QuizList extends Component {
	render() {
		const quizes = [1, 2, 3].map((quiz, index) => (
			<li key={ index }>
				<NavLink to={ `/quiz/${ quiz }` }>Test { quiz }</NavLink>
			</li>
		))
		return (
			<div className={ classes.QuizList }>
				<div>
					<h1>List of tests</h1>

					<ul>
						{ quizes.length ? quizes : null }
					</ul>
				</div>
			</div>
		)
	}
}

export default QuizList