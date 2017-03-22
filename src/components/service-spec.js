import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSpec } from '../actions'
import spray from  '../cleaning-icons/svg/spray.svg'
import vacuum from  '../cleaning-icons/svg/vacuum-cleaner.svg'
import mop from  '../cleaning-icons/svg/mop.svg'
import windows from  '../cleaning-icons/svg/window.svg'
import bin from  '../cleaning-icons/svg/bin.svg'
import '../stylesheets/spec.css'
import Flexbox from 'flexbox-react'


const specImg = [spray, vacuum, mop, windows, bin]

const styles = {
	specDiv: {
		height: '300px',
		margin: 10,
		marginTop: 20,
		borderRadius: '3px',
		backgroundColor: 'none'
	},
	svg: {
		height: '75px',
		fill: '#eee',
		textShadow: '1px 1px rgba(0,0,0, 0.1)'
	},
	img: {
		height: '60px',
		padding: '10px',
	},
	specs: {
		padding: 10,

	},
	flexbox: {
		border: 'none',
		borderBottom: '1px solid rgba(0,0,0, 0.2)'
	},
	flexContent: {
		padding: 10,
		borderLeft: '1px solid rgba(0,0,0, 0.2)',
		textAlign: 'left'
	}
}
class Specs extends Component {
	componentDidMount(){
		
	}
	getSpec() {
		return this.props.specs.map(spec => (
				<Flexbox key={spec.id} flexDirection="row" minHeight="auto" >
				  <Flexbox style={styles.flexbox} element="header" height="auto" flexGrow={0} >
				    <img style={styles.img} src={specImg[spec.id - 1]} role='presentation' />
				  </Flexbox>
				  <Flexbox flexGrow={4} style={styles.flexbox}>
				    <div style={styles.flexContent}>
				    {spec.contents}
				    </div>
				  </Flexbox>
				</Flexbox>
		))
	}

	render() {
		return(
			<div style={styles.specDiv}>

			{this.getSpec()}

			</div>
		)	
	}
	
}

const mapStateToProps = state => {
	return {
		specs: state.specs,
		firebase: state.firebase
	}
}
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ selectSpec: selectSpec})
}
export default connect(mapStateToProps, mapDispatchToProps) (Specs)
