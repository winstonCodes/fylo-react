import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import './App.css';
import Themes from './themes';

class App extends Component {
  constructor(props){
    super(props);
    //set initial state to first theme
    this.state = {theme: Themes[0]};
    //bind change theme function
    this.handleEvent = this.handleEvent.bind(this);
  }
  //change theme on click
  handleEvent(e){
    let newTheme = this.state.theme.nextTheme;
    this.setState({theme: Themes[newTheme]})
  }
  render() {
    return (
      <div className="App" onClick={this.handleEvent}>
        <LandingPage theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
