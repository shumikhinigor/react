import { Component } from 'react'
import classes from './QuizActive.module.sass'
import AnswersList from './AnswersList/AnswersList';

class QuizActive extends Component {
	render() {
		return (
			<div className={ classes.QuizActive }>
				<p className={ classes.Question }>
					<span>
						<strong>{ this.props.answerNumber }.</strong>&nbsp;
						{ this.props.question }
					</span>
					<small>{ this.props.answerNumber } из { this.props.quizLength }</small>
				</p>

				<AnswersList
					state={ this.props.state }
					answers={ this.props.answers }
					onClickAnswer={ this.props.onClickAnswer }
				/>
			</div>
		)
	}
}

export default QuizActive