import React, { Component } from 'react'
import classes from './Quiz.module.sass'
import QuizActive from '../../components/QuizActive/QuizActive'
import QuizFinished from '../../components/QuizFinished/QuizFinished'

class Quiz extends Component {
	constructor(props) {
		super(props)
		this.state = {
			results: {}, // { [id]: 'success || error }
			isFinished: false,
			activeQuestions: 0,
			answerState: null, // { [id]: 'success || error' }
			quiz: [
				{
					id: 1,
					question: 'How are you?',
					correctAnswerId: 2,
					answers: [
						{ id: 1, text: 'Bad' },
						{ id: 2, text: 'Good' },
						{ id: 3, text: 'Wonderful' },
						{ id: 4, text: 'Delightfully' }
					]
				},
				{
					id: 2,
					question: 'What is 2 + 2?',
					correctAnswerId: 3,
					answers: [
						{ id: 1, text: '5' },
						{ id: 2, text: '8' },
						{ id: 3, text: '4' },
						{ id: 4, text: '6' }
					]
				}
			]
		}
	}

	onClickAnswerHandler = answerId => {
		const { quiz, activeQuestions, answerState, results } = this.state
		const question = quiz[activeQuestions]

		if (answerState) {
			const key = Object.keys(answerState)[0]
			if (answerState[key] === 'success') return
		}

		if (question.correctAnswerId === answerId) {
			if (!results[question.id]) results[question.id] = 'success'
			this.setState({ answerState: { [answerId]: 'success' }, results })
			const timeout = setTimeout(() => {
				if (this.isQuizFinished()) this.setState({ isFinished: true })
				else this.setState({ activeQuestions: activeQuestions + 1, answerState: null })

				clearTimeout(timeout)
			}, 1000)
		} else {
			results[question.id] = 'error'
			this.setState({ answerState: { [answerId]: 'error' }, results })
		}
	}
	isQuizFinished = () => {
		return this.state.activeQuestions + 1 === this.state.quiz.length
	}
	onClickRepeatHandler = () => {
		this.setState({
			activeQuestions: 0,
			answerState: null,
			isFinished: false,
			results: {}
		})
	}


	render() {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes.Wrapper }>
					<h1>Answer all questions</h1>

					{
						this.state.isFinished
							? <QuizFinished
								results={ this.state.results }
								quiz={ this.state.quiz }
								onClickRepeat={ this.onClickRepeatHandler }
							/>
							: <QuizActive
								answers={ this.state.quiz[this.state.activeQuestions].answers }
								question={ this.state.quiz[this.state.activeQuestions].question }
								onClickAnswer={ this.onClickAnswerHandler }
								quizLength={ this.state.quiz.length }
								answerNumber={ this.state.activeQuestions + 1 }
								state={ this.state.answerState }
							/>
					}
				</div>
			</div>
		)
	}
}

export default Quiz