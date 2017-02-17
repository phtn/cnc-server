import React from 'react'
import Slider from 'react-slick'

const styles = {
	headerSlideDiv: {
		maxHeight: '60px',
		lineHeight: '60px',
		textAlign: 'center',
		borderBottom: "1px solid rgba(153,153,153, 0.3 )"
	},
	headerSlides: {
		color: '#0288d1',
		fontFamily: 'Questrial, sans-serif',
		fontSize: '24px'
	}
}

const settings = {
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1700,
	fade: true,
	swipeToSlide: false,
}

const HearderSlides = () => {
	return (
		<div style={styles.headerSlideDiv}>
			<Slider {...settings}>
				<div style={styles.headerSlides}>Professional Cleaning Services</div>
				<div style={styles.headerSlides}>Janitorial Services</div>
				<div style={styles.headerSlides}>Move-In / Move-Out Services</div>
				<div style={styles.headerSlides}>Carpet Care</div>
				<div style={styles.headerSlides}>Sanitation</div>
				<div style={styles.headerSlides}>Harwood Floor Polishing</div>
				<div style={styles.headerSlides}>Odor Care Treatment</div>
			</Slider>
		</div>
	)
}
export default HearderSlides