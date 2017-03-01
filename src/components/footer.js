import React from 'react'

const styles = {
	footerDiv: {
		height: '50px',
		border: '0px solid red',
		marginTop: '45px',
		width: '100%',
		position: 'absolute',
		bottom: 0,
		/*backgroundColor: 'rgba(2,136,209, 0.5 )',*/
		backgroundColor: 'none',
		textAlign: 'center',
		lineHeight: '50px'
	},
	footerLabel: {
		fontFamily: 'Quicksand, sans-serif',
		fontSize: '16px',
		color: '#333',
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
		color: '#555',
	},
	footerChat: {
		marginLeft: '130px',
		color: '#333',
		fontSize: '16px',
	}
}

const Footer = () => {
	return (
		<div style={styles.footerDiv}>
			<span style={styles.callIcon} className="fa fa-phone"></span>
			<span style={styles.footerLabel} ><a style={styles.footerLabel} href="tel:2675778444">267-577-8444</a></span>
			<span style={styles.footerChat} className="fa fa-comments"></span>
		</div>
	)
}
export default Footer