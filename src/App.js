import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import './App.css';
import Themes from './themes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {theme: Themes[0]};
    this.handleEvent = this.handleEvent.bind(this);
  }
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
