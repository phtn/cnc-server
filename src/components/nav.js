import React from 'react'
import { Link } from 'react-router'

const styles = {
  brand: {
    color: '#eee',
    fontFamily: 'Questrial, sans-serif',
    fontSize: '14px',
    lineHeight: '50px',
    letterSpacing: '1px',
    cursor: 'pointer',
  },
  navDiv: {
  	height: '50px',
  	paddingLeft: '15px',
  	borderBottom: '1px solid rgba(153,153,153, 0.8 )',
  	backgroundColor: 'rgba(0,0,0, 0.3)'
  },
  icon: {
  	marginRight: '10px',
  	lineHeight: '50px',
  	color: '#0288d1'
  },
  link: {
    textDecoration: 'none'
  }
}

const brand = "CLICK N CLEAN"

const Nav = () => {
	return (
		<div style={styles.navDiv}>
				<i style={styles.icon} className="fa fa-mouse-pointer"></i>
        <Link to='/' style={styles.link}><span style={styles.brand}>{brand}</span></Link>
		</div>
	)
}
export default Nav 

// #0288d1 blue