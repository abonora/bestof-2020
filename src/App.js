import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './Components/landing/landing';
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
        <div className="slide2">
          <h1>here just for testing the full page landing component</h1>
        </div>
        <Playlists/>
      </div>
    );
  }
}

export default App;