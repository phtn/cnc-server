import React from 'react'
import Slider from 'react-slick'
import './style-components.css'

const styles = {
	slidesDiv: {
		height: 350,
	},
	slides: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '10px',
		letterSpacing: '2px',
		textAlign: 'center',
		lineHeight: '350px',
		color: '#eee'
	},
	slidesBtn: {
		backgroundColor: 'rgba(0,0,0, 0.5 )',
		height: '50px',
		borderRadius: '3px',
		border: 'none',
		minWidth: '300px'
	},
	slidesLabel: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '20px',
		color: '#eee',
	},
	slidesImg: {
		textAlign: 'center',
		margin: '0 auto'
	}
}

const settings = {
	arrows: false,
	autoplay: false,
	autoplaySpeed: 3000,
	dots: true
}

const Slides = () => {
	return (
		<div style={styles.slidesDiv}>
			<Slider {...settings}>
				<div style={styles.slides} className="offices-div">
					<button style={styles.slidesBtn}>
						<span style={styles.slidesLabel}>Office Cleaning Services</span>
					</button>
				</div>
				<div style={styles.slides} className="condominiums-div">
					<button style={styles.slidesBtn}>
						<span style={styles.slidesLabel}>Condominiums</span>
					</button>
				</div>
				<div style={styles.slides} className="restaurants-div">
					<button style={styles.slidesBtn}>
						<span style={styles.slidesLabel}>Restaurants</span>
					</button>
				</div>
				<div style={styles.slides} className="business-complex-div">Business Complex</div>
				<div style={styles.slides} className="hospitals-div">Hospitals</div>
				<div style={styles.slides} className="professionals-div">Highly Trained Professionals</div>
			</Slider>
		</div>
	)
}
export default Slides