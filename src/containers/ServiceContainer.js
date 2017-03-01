import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServiceDetail from '../components/service'


class ServiceContainer extends Component {
	
	render(){
		
		const { id, title, type, detailHeader , detailDiv, slogan} = this.props.services
		return(
			<div>
			<ServiceDetail 
				id={id} 
				title={title} 
				type={type} 
				header={detailHeader} 
				detail={detailDiv}
				slogan={slogan}
			/>
			
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { services: state.active }
}

export default connect(mapStateToProps)(ServiceContainer)