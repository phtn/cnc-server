import React from 'react'

const styles = {
	footerDiv: {
		height: '70px',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: 'rgba(2,136,209, 0.5 )',
		textAlign: 'center',
		lineHeight: '70px'
	},
	footerLabel: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '16px',
		color: '#eee',
		letterSpacing: '2px',
		textDecoration: 'none',
		cursor: 'pointer',
	},
	copy: {
		fontSize: '8px',
		fontFamily: 'Questrial, sans-serif',
		color: '#eee',
		marginLeft: 70
	},
	callIcon: {
		marginRight: 10,
		color: '#eee',
	}
}

const Footer = () => {
	return (
		<div style={styles.footerDiv}>
			<span style={styles.callIcon} className="fa fa-phone"></span>
			<span style={styles.footerLabel} >Call <a style={styles.footerLabel} href="tel:2150008000">215-000-8000</a></span>
			<span style={styles.copy}>&copy; 2017</span>
		</div>
	)
}
export default Footer