import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }


  render(){

    const { isMenuOpen } = this.state;

    return (
      <>
        <NavBar 
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMobileMenu}
        />
        <Hero />
      </>
    )
  }
}

export default App;
