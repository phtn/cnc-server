import React from 'react'

const styles = {
	footerDiv: {
		height: '60px',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: 'rgba(2,136,209, 0.5 )',
		textAlign: 'center',
		lineHeight: '60px'
	},
	footerLabel: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '16px',
		color: '#eee',
		letterSpacing: '2px'
	}
}

const Footer = () => {
	return (
		<div style={styles.footerDiv}>
			<span style={styles.footerLabel} >Call 215-000-8000</span>
		</div>
	)
}
export default Footer