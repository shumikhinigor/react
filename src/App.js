import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './views/Quiz/Quiz'
import QuizList from './views/QuizList/QuizList'
import Auth from './views/Auth/Auth'
import QuizCreator from './views/QuizCreator/QuizCreator'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Routes>
						<Route path="/" element={ <QuizList /> } />
						<Route path="/auth" element={ <Auth /> } />
						<Route path="/quiz-creator" element={ <QuizCreator /> } />
						<Route path="/quiz/:id" element={ <Quiz /> } />
					</Routes>
				</Layout>
			</div>
		)
	}
}

export default App;
