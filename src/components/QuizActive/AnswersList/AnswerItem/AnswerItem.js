import { Component } from 'react'
import classes from './AnswerItem.module.sass'

class AnswerItem extends Component {
	render() {
		return (
			<li className={ classes.AnswerItem }>
				{ this.props.answer.text }
			</li>
		)
	}
}

export default AnswerItem