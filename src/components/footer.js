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
		backgroundColor: 'none',
		textAlign: 'center',
	},
	footerIcon: {
		color: '#555',
		fontSize: '18px',
	},
	footerLabel: {
		color: '#555',
		fontSize: '18px',
		textDecoration: 'none',
		fontFamily: 'Quicksand, sans-serif',
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
		cursor: 'pointer',
		userSelect: 'none',
	},
	flexContent: {
		textAlign: 'center',
		fontSize: '18px',
	}
}

class Footer extends Component {

	componentDidMount(){

	}

	showGoogle() {
		return (
			<Flexbox key='g' style={styles.flexbox} element='footer' flexGrow={1} height='40px' className={this.getGClass()}>
				<div style={styles.flexIcon}>
					<a href='https://www.google.com/search?q=%22click+n+clean+philadelphia%22'>
						<span style={styles.footerIcon} className="fa fa-google"></span>
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
						<span style={styles.footerIcon} className="fa fa-facebook"></span>
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
						<span style={styles.footerIcon} className="fa fa-envelope"></span>
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
			<Flexbox style={styles.flexbox} element='footer' flexGrow={3} height='40px' className="animated fadeInUp number">
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
			
			<Flexbox style={styles.flexbox} element='footer' flexGrow={1} height='40px' className="animated fadeInLeft call">
				<div style={styles.flexIcon}>
					<span onClick={()=> this.props.toggleCall(this.props.call)} style={styles.footerIcon} className="fa fa-phone"></span>
				</div>
			</Flexbox>

			
			{this.handleCallToggle()}
			
			
			<Flexbox style={styles.flexbox} element='footer' flexGrow={1} height='40px' className="animated fadeInUp chat">
				<div style={styles.flexIcon}>
					<span style={styles.footerIcon} className="fa fa-comments"></span>
				</div>
			</Flexbox>

		</Flexbox	>
		</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		call: state.call,
	}
}
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		toggleCall: toggleCall
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)

