import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleCall } from '../actions'
import Flexbox from 'flexbox-react'
import '../stylesheets/footer.css'

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
		color: '#555',
		fontSize: '18px',
	},
	footerChat: {
		color: '#333',
		fontSize: '16px',
	},
	flexboxDiv: {
		borderTop: '1px solid gray',
		textAlign: 'center',

	},
	flexbox: {
		border: '0px solid blue',
		justifyContent: 'space-around',
		lineHeight: '40px'
	},
	flexIcon: {
		textAlign: 'center',

	},
	flexContent: {
		textAlign: 'center',
	},
	link: {
		textDecoration: 'none !important',
	}
}

class Footer extends Component {

	showGoogle() {
		return (
			<Flexbox key='g' style={styles.flexbox} element='footer' flexGrow={1} height='40px' className={this.getGClass()}>
				<div style={styles.flexIcon}>
					<a href='https://www.google.com/search?q=%22click+n+clean+philadelphia%22'>
						<span style={styles.callIcon} className="fa fa-google"></span>
					</a>
				</div>
			</Flexbox>
		)
	}
	getGClass(){
		return this.props.call === false ? 'animated fadeOut google' : 'animated fadeInUp google'
	}

	showFacebook() {
		return (
			<Flexbox key='f' style={styles.flexbox} element='footer' flexGrow={1} height='40px' className={this.getFClass()}>
				<div style={styles.flexIcon}>
					<a href='https://www.facebook.com/clickncleanPA/'>
						<span style={styles.callIcon} className="fa fa-facebook"></span>
					</a>
				</div>
			</Flexbox>
		)
	}
	getFClass(){
		return this.props.call === false ? 'animated fadeOut facebook' : 'animated fadeInUp facebook'
	}

	showEmail() {
		return (
			<Flexbox key='e' style={styles.flexbox} element='footer' flexGrow={1} height='40px' className={this.getEClass()}>
				<div style={styles.flexIcon}>
					<a href='https://www.facebook.com/clickncleanPA/'>
						<span style={styles.callIcon} className="fa fa-envelope"></span>
					</a>
				</div>
			</Flexbox>
		)
	}
	getEClass(){
		return this.props.call === false ? 'animated fadeOut email' : 'animated fadeInUp email'
	}

	showNumber() {
		return(
			<Flexbox style={styles.flexbox} element='footer' flexGrow={1} height='40px' className="animated fadeInLeft number">
				<div style={styles.flexIcon}>
					<span style={styles.footerLabel} ><a style={styles.footerLabel} href="tel:2675778444">267-577-8444</a></span>
				</div>
			</Flexbox>
		)
	}

	handleCallToggle() {
		if (this.props.call) {

			return [this.showGoogle(), this.showFacebook(), this.showEmail()]
		} else {
			return this.showNumber()
		}
	}

		

	render(){
	return (
		<div style={styles.footerDiv}>
		<Flexbox flexDirection='row' minHeight='auto'>
			
			<Flexbox style={styles.flexbox} element='footer' flexGrow={1} height='40px' className="animated fadeInUp call">
				<div style={styles.flexIcon}>
					<span onClick={()=> this.props.toggleCall(this.props.call)} style={styles.callIcon} className="fa fa-phone"></span>
				</div>
			</Flexbox>

			
			{this.handleCallToggle()}
			
			
			<Flexbox style={styles.flexbox} element='footer' flexGrow={1} height='40px' className="animated fadeInUp chat">
				<div style={styles.flexIcon}>
					<span style={styles.callIcon} className="fa fa-comments"></span>
				</div>
			</Flexbox>

		</Flexbox	>
		</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		call: state.call
	}
}
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ toggleCall: toggleCall }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)

/*
<div style={styles.footerDiv}>
			<span style={styles.callIcon} className="fa fa-phone"></span>
			<span style={styles.footerLabel} ><a style={styles.footerLabel} href="tel:2675778444">267-577-8444</a></span>
			<span style={styles.footerChat} className="fa fa-comments"></span>
		</div>
*/