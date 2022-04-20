import { Component } from 'react'
import classes from './QuizActive.module.sass'
import AnswersList from './AnswersList/AnswersList';

class QuizActive extends Component {
	render() {
		return (
			<div className={ classes.QuizActive }>
				<p className={ classes.Question }>
					<span>
						<strong>1.</strong>&nbsp;How are you?
					</span>
					<small>4 из 12</small>
				</p>

				<AnswersList answers={ this.props.answers }/>
			</div>
		)
	}
}

export default QuizActive