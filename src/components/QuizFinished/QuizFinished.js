import { Component } from 'react'
import classes from './QuizFinished.module.sass'

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
							const IconClasses = [
								'fa',
								this.props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
								classes[this.props.results[quizItem.id]]
							]
							return (
								<li key={ quizItem.id }>
									<strong>{ index + 1 }</strong>. &nbsp;
									{ quizItem.question }
									<i className={ IconClasses.join(' ') } />
								</li>
							)
						})
					}
				</ul>

				<p>Correct { successCount } of { this.props.quiz.length }</p>

				<div>
					<button onClick={ this.props.onClickRepeat }>Repeat</button>
				</div>
			</div>
		)
	}
}

export default QuizFinished