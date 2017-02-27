import React, { Component } from 'react'
import Slider from 'react-slick'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectService } from '../actions'
import { Link } from 'react-router'
import './style-components.css'
import { styles } from '../styles/slider-styles'


const settings = {
	arrows: false,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 5000,
	dots: true,
}

class Slides extends Component {
	
	getServices(){
		return this.props.services.map(service => (
				<div key={service.id} style={styles.slides} className={service.name}>
					<Link to='services'>
					<button onClick={()=> this.props.selectService(service)} style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>{service.title}</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
					</Link>
				</div>
			)
		)
	}
	render(){
		return(
			<div style={styles.slidesDiv} className="">
				<Slider {...settings}>
					{this.getServices()}
				</Slider>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		services: state.services
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ selectService: selectService }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Slides)