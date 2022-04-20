import { Component } from 'react'
import classes from './AnswerItem.module.sass'

class AnswerItem extends Component {
	render() {
		const AnswerItemClasses = [ classes.AnswerItem ]
		if (this.props.state) AnswerItemClasses.push(classes[this.props.state])

		return (
			<li
				className={ AnswerItemClasses.join(' ') }
				onClick={ () => this.props.onClickAnswer(this.props.answer.id) }
			>
				{ this.props.answer.text }
			</li>
		)
	}
}

export default AnswerItem