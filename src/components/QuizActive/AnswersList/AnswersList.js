import React, { Component } from 'react'
import classes from './AnswersList.module.sass'
import AnswerItem from './AnswerItem/AnswerItem'

class AnswersList extends Component {
	render() {
		const answers = this.props.answers.map(answer =>
			<AnswerItem
				key={ answer.id }
				answer={ answer }
				onClickAnswer={ this.props.onClickAnswer }
				state={ this.props.state ? this.props.state[answer.id] : null }
			/>
		)
		return (
			<ul className={ classes.AnswersList }>
				{ answers }
			</ul>
		)
	}
}

export default AnswersList