import React from 'react'
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
const ServiceDetail = ({title, type, header, detail}) => {
	return (
		<div style={styles.div} className="">
			<div className={detail}>
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