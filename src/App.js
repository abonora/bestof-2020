import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './Components/landing/landing';
import MainContent from './Components/mainContent/mainContent';
import Playlists from './Components/playlists/playlists';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }
  
  // async componentDidMount() {
    
    
  // }
  render() {
    return (
      <div className='app'>
        <Landing title="Best Albums of 2020" site="albertobonora.com"/>
        <MainContent title="Best Albums of 2020" site="albertobonora.com" year="2020"/>
        <Playlists/>
      </div>
    );
  }
}

export default App;