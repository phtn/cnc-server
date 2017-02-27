import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServiceDetail from '../components/service'

class ServiceContainer extends Component {
	
	render(){
		
		const { id, title, type, detailHeader , detailDiv} = this.props.services
		return(
			<ServiceDetail id={id} title={title} type={type} header={detailHeader} detail={detailDiv}/>
		)
	}
}

const mapStateToProps = state => {
	return { services: state.active }
}

export default connect(mapStateToProps)(ServiceContainer)