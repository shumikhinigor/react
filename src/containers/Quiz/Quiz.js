import { Component } from 'react'
import classes from './Quiz.module.sass'
import QuizActive from '../../components/QuizActive/QuizActive';

class Quiz extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quiz: [
				{
					answers: [
						{ text: 'Answer 1' },
						{ text: 'Answer 2' },
						{ text: 'Answer 3' },
						{ text: 'Answer 4' }
					]
				}
			]
		}
	}
	render() {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes.Wrapper }>
					<h1>Answer all questions</h1>
					<QuizActive answers={ this.state.quiz[0].answers } />
				</div>
			</div>
		)
	}
}

export default Quiz