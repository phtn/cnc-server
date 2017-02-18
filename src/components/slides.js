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
		height: '80px',
		borderRadius: '3px',
		border: 'none',
		minWidth: '300px',
		cursor: 'pointer'
	},
	slidesLabel: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '20px',
		color: '#eee',
	},
	subLabel: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '16px',
		color: '#00bce4',
		lineHeight: '30px',
		marginRight: '10px'
	},
	linkIcon: {
		fontSize: '16px',
		color: '#00bce4',
		lineHeight: '30px',
	},
	slidesImg: {
		textAlign: 'center',
		margin: '0 auto'
	},
	usersIcon: {
		color: 'gray',
		fontSize: '80px'
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
						<div>
						<span style={styles.slidesLabel}>Office Cleaning Services</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="condominiums-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Condominiums</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="restaurants-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Restaurants</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="business-complex-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Business Complex</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="hotels-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Hotels</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="malls-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Malls</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="hospitals-div">
					<button style={styles.slidesBtn}>
						<div>
						<span style={styles.slidesLabel}>Hospitals</span><br/>
						<span style={styles.subLabel}>Learn More</span>
						<i style={styles.linkIcon} className="fa fa-external-link-square"></i>
						</div>
					</button>
				</div>
				<div style={styles.slides} className="professionals-div">
					<span style={styles.usersIcon} className="fa fa-users"></span>
				</div>
			</Slider>
		</div>
	)
}
export default Slides