import React from 'react'
import mojs from 'mo-js'
import '../stylesheets/detail.css'

const styles = {
	div: {
		height: '400px',
		textAlign: 'center',
		fontFamily: 'Questrial, sans-serif'
	},
	title: {
		fontFamily: 'Quicksand, sans-serif',
		fontSize: '32px',
		color: '#eee',
	},
	subtitleDiv: {
		marginTop: '20px',
	},
	subtitle: {
		color: '#0288d1'
	},
	spec: {
		color: '#666',
		fontSize: '14px'
	}
}

const photons = () => {
	new mojs.Shape({
		  shape:        'circle',
		  points: 			 6,
		  scale:         { 0 : .2 },
		  top: 					 '70px',
		  left: 				 '95%',
		  fill: 				 'none',
		  stroke: 			 {'#eee': '#eee', easing: 'cubic.out'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      3000,
		  angle:        { 0: 270 },
		  easing:        'cubic.out',
		  repeat: 			20
		}).play()

	new mojs.Shape({
		  shape:        'polygon',
		  scale:         { 0 : .2 },
		  top: 					 '70px',
		  left: 				 '95%',
		  fill: 				 'none',
		  stroke: 			 {'#eee': '#eee', easing: 'cubic.out'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      2500,
		  angle:        { 0: 180 },
		  easing:        'cubic.out',
		  repeat: 			20
		}).play()
}

const zeroPhotons = () => {
	new mojs.Shape({
		shape: 'circle',
		radius: 0
	})
}
const loadPhotons = (type) => {
	if (type === 'Office') {
		photons()
	} else {
		zeroPhotons()
	}
}
const ServiceDetail = ({title, type, header, detail}) => {
	return (
		<div style={styles.div} className="">
			<div className={detail}>
			{ loadPhotons(type) }
				<span className="detail-title" style={styles.title} >{header}</span>
			
			</div>
			<div style={styles.subtitleDiv}>
				<span style={styles.subtitle}>Professional Cleaning Services</span><br/>
				<span style={styles.spec}>{type} Cleaning Spec</span>
			</div>
		</div>
	)
}

export default ServiceDetail