import { Component } from 'react'
import classes from './QuizFinished.module.sass'

class QuizFinished extends Component {
	render() {
		return (
			<div className={ classes.QuizFinished }>
				<ul>
					<li>
						<strong>1. </strong>
						How are you
						<i className={ 'fa fa-times ' + classes.error } />
					</li>
					<li>
						<strong>2. </strong>
						How are you
						<i className={ 'fa fa-check ' + classes.success } />
					</li>
				</ul>

				<p>Correct 4 of 6</p>

				<div>
					<button>Repeat</button>
				</div>
			</div>
		)
	}
}

export default QuizFinished