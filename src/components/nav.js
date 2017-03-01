import React from 'react'
import { Link } from 'react-router'

const styles = {
  brand: {
    color: '#eee',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '18px',
    lineHeight: '50px',
    letterSpacing: '1px',
    cursor: 'pointer',
    textShadow: '1px 1px rgba(0,0,0, 0.1)'
  },
  navDiv: {
  	height: '50px',
  	paddingLeft: '15px',
  	borderBottom: '0px solid rgba(153,153,153, 0.3 )',
  	backgroundColor: 'rgba(0,0,0, 0.7)'
  },
  iconStack: {
    marginRight: '5px',
  },
  icon2: {
    fontSize: '0px',
    color: 'rgba(0,0,0,0.2)',
    lineHeight: '28px',
    textShadow: '1px 1px rgba(0,0,0, 0.1)'
  },
  icon1: {
    fontSize: '14px',
  	color: '#ccc',
    marginLeft: '2px',
    lineHeight: '28px',
    textShadow: '1px 1px rgba(0,0,0, 0.1)'
  },
  link: {
    textDecoration: 'none'
  }
}

const brand = "CLICK N CLEAN"

const Nav = () => {
	return (
		<div style={styles.navDiv}>
        <span style={styles.iconStack} className="fa-stack fa-md" >
          <i style={styles.icon2} className="fa fa-circle-o fa-stack-2x"></i>
          <i style={styles.icon1} className="fa fa-mouse-pointer fa-stack-1x"></i>
        </span>
				
        <Link to='/' style={styles.link}><span style={styles.brand}>{brand}</span></Link>
		</div>
	)
}
export default Nav 

// #0288d1 blue