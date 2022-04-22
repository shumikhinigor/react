import React, { Component } from 'react';
import classes from './App.module.sass';
import Cars from './views/Cars/Cars'
import Car from './views/Cars/Car/Car'
import About from './views/About/About'
import Home from './views/Home/Home'
import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className={ classes.App }>
				<Navigation />

				<main className={ classes['App-main'] }>
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/about" element={ <About /> } />
						<Route path="/cars" element={ <Cars /> } />
						<Route path="/cars/:name" element={ <Car /> } />
						<Route path="*" element={ <h1>404 Not Found</h1> } />
					</Routes>
				</main>
			</div>
		)
	}
}

export default App;
