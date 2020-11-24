import React, { Component } from 'react';
import './mainContent.scss';

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
        <div className="maincontent">
            <header>
                <h6>{this.props.title}</h6>
                <h6>{this.props.site}</h6>
            </header>
            <h1>{this.props.site} here just for testing the full page landing component</h1>
        </div>
    );
  }
}

export default App;