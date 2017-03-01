import React, { Component } from 'react'
import Nav from './components/nav'



class Layout extends Component {
	render(){
		return(
			<div>
				<Nav />
				{this.props.children}
			</div>
		)
	}
}
export default Layout