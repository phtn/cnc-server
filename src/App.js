import React, { Component } from 'react';
import HeaderSlides from './components/header-slides'
import Slides from './components/slides'
import Footer from './components/footer'
//import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">

        <HeaderSlides />
        <Slides />
				<Footer/>

      </div>
    );
  }
}

export default App;
