import React, { Component } from 'react'
import classes from './QuizFinished.module.sass'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

class QuizFinished extends Component {
	render() {
		const successCount = Object.keys(this.props.results).reduce((total, key) => {
			if (this.props.results[key] === 'success') total++
			return total
		}, 0)

		return (
			<div className={ classes.QuizFinished }>
				<ul>
					{
						this.props.quiz.map((quizItem, index) => {
							const iconClasses = [
								'fa',
								this.props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
								classes[this.props.results[quizItem.id]]
							]
							return (
								<li key={ quizItem.id }>
									<strong>{ index + 1 }</strong>. &nbsp;
									{ quizItem.question }
									<i className={ iconClasses.join(' ') } />
								</li>
							)
						})
					}
				</ul>

				<p>Correct { successCount } of { this.props.quiz.length }</p>

				<div>
					<Button type={ 'primary' } onClick={ this.props.onClickRepeat }>Repeat</Button>
					<Link to={ '/' }>
						<Button type={ 'success' }>Go to test list</Button>
					</Link>
				</div>
			</div>
		)
	}
}

export default QuizFinished