import React from 'react'
import Slider from 'react-slick'

const styles = {
	slidesDiv: {
		margin: 5,
		height: 350
	},
	slides: {
		textAlign: 'center',
		lineHeight: '350px',
		color: '#0288d1'
	}
}

const settings = {
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true
}

const Slides = () => {
	return (
		<div style={styles.slidesDiv}>
			<Slider {...settings}>
				<div style={styles.slides}>Offices</div>
				<div style={styles.slides}>Condominiums</div>
				<div style={styles.slides}>Restaurants</div>
				<div style={styles.slides}>Business Complex</div>
				<div style={styles.slides}>Hospitals</div>
				<div style={styles.slides}>Highly Trained Professionals</div>
			</Slider>
		</div>
	)
}
export default Slides