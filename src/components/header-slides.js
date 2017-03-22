import React from 'react'
import Slider from 'react-slick'
//import db from '../firebase'

//let firebaseRef = db.ref('/services')



import './media.css'



const styles = {
	headerSlideDiv: {
		marginTop: '20px',
		maxHeight: '40px',
		lineHeight: '40px',
		textAlign: 'center',
	},
	headerSlides: {
		color: '#ccc',
		fontFamily: 'Quicksand, sans-serif',
		fontSize: '24px',
		backgroundColor: '#333',
		textShadow: '1px 1px rgba(0,0,0, 0.3)'
	},
	title: {
		fontFamily: 'Questrial, sans-serif',
		textTransform: 'uppercase',
		backgroundColor: 'rgba(0,0,0, 0.07)',
		padding: '5px 10px',
		color: '#555',
		fontSize: '14px',
		letterSpacing: '1px',
		borderRadius: '15px'
	},
	s1: {
		backgroundColor: '#333',
		fontFamily: 'Questrial, sans-serif',
		color: '#eee',
		fontSize: '22px'
	}
}

const settings = {
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3700,
	fade: false,
	vertical: true
}




const HearderSlides = () => {
	return (
		<div style={styles.headerSlideDiv} className="header-div">
		<span style={styles.title}>Professional Cleaning Services</span>
			<Slider {...settings}>
				<div style={styles.headerSlides}>Customized Cleaning</div>
				<div style={styles.headerSlides}> Pro Janitorial Services</div>
				<div style={styles.headerSlides}>Move-In / Move-Out Services</div>
				<div style={styles.headerSlides}>Pro Carpet Care</div>
				<div style={styles.headerSlides}>Complete Sanitation</div>
				<div style={styles.headerSlides}>Harwood Floor Polishing</div>
				<div style={styles.headerSlides}>Odor Care Treatment</div>
				<div style={styles.headerSlides}>Pro Landscaping</div>
			</Slider>
		</div>
	)
}




export default HearderSlides