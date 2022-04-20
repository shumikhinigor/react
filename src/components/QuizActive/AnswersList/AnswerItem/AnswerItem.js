import { Component } from 'react'
import classes from './AnswerItem.module.sass'

class AnswerItem extends Component {
	render() {
		const answerItemClasses = [ classes.AnswerItem ]
		if (this.props.state) answerItemClasses.push(classes[this.props.state])

		return (
			<li
				className={ answerItemClasses.join(' ') }
				onClick={ () => this.props.onClickAnswer(this.props.answer.id) }
			>
				{ this.props.answer.text }
			</li>
		)
	}
}

export default AnswerItem