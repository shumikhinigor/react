import React, { Component } from 'react';
import classes from './App.module.sass';
import Welcome from './components/Welcome/Welcome'
import Cars from './views/Cars/Cars'
import About from './views/About/About'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
	render() {

		return (
			<div className={ classes.App }>
				<main className={ classes['App-main'] }>
					<Navigation />

					<Welcome />

					<About />

					<Cars />
				</main>
			</div>
		)
	}
}

export default App;
