import { Component } from 'react'
import classes from './AnswersList.module.sass'
import AnswerItem from './AnswerItem/AnswerItem';

class AnswersList extends Component {
	render() {
		const answers = this.props.answers.map((answer, index) => <AnswerItem key={ index } answer={ answer } />)
		return (
			<ul className={ classes.AnswersList }>
				{ answers }
			</ul>
		)
	}
}

export default AnswersList