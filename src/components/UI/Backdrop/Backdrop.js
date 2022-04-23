import React, { Component } from 'react'
import classes from './Backdrop.module.sass'

class Backdrop extends Component {
	render() {
		return <div className={ classes.Backdrop } onClick={ this.props.onClick } />
	}
}

export default Backdrop