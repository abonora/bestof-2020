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
            <div className="maincontent--inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ex, blandit vel massa et, laoreet bibendum nibh. In eu lorem lorem. Vivamus felis neque, ultricies nec mi nec, feugiat tincidunt orci. Nunc mi nunc, tristique nec tempus eget, faucibus vel neque. Nam bibendum nibh quis augue pulvinar commodo. Nulla at convallis massa. Cras eros justo, pretium pellentesque sollicitudin sodales, mollis ac tellus. Praesent ut eleifend velit, ac vestibulum est. Vestibulum fermentum massa et iaculis suscipit. Etiam sit amet odio dolor. Integer bibendum, metus et consectetur placerat, dolor erat imperdiet diam, et cursus magna orci egestas tellus. Phasellus ornare velit et leo dictum, quis malesuada orci congue. Nullam dapibus odio vitae tortor eleifend luctus. Aenean suscipit augue suscipit auctor dictum. Integer luctus commodo rutrum.</p>
                <div className="albumlist">
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Slipknot_-_We_Are_Not_Your_Kind.png" />
                                <span>50</span>
                            </div>
                            <div className="albumlist--info-details">
                                <span className="albumlist--info-title">The Deadbeat Bang of Heartbreak City</span>
                                <span className="albumlist--info-artist">Beach Slang</span>
                                <ul>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Sleater-Kinney_-_The_Center_Wont_Hold.jpg" />
                                <span>50</span>
                            </div>
                            <div className="albumlist--info-details">
                                <span className="albumlist--info-title">The Deadbeat Bang of Heartbreak City</span>
                                <span className="albumlist--info-artist">Beach Slang</span>
                                <ul>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Slipknot_-_We_Are_Not_Your_Kind.png" />
                                <span>50</span>
                            </div>
                            <div className="albumlist--info-details">
                                <span className="albumlist--info-title">The Deadbeat Bang of Heartbreak City</span>
                                <span className="albumlist--info-artist">Beach Slang</span>
                                <ul>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Slipknot_-_We_Are_Not_Your_Kind.png" />
                                <span>50</span>
                            </div>
                            <div className="albumlist--info-details">
                                <span className="albumlist--info-title">The Deadbeat Bang of Heartbreak City</span>
                                <span className="albumlist--info-artist">Beach Slang</span>
                                <ul>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Slipknot_-_We_Are_Not_Your_Kind.png" />
                                <span>50</span>
                            </div>
                            <div className="albumlist--info-details">
                                <span className="albumlist--info-title">The Deadbeat Bang of Heartbreak City</span>
                                <span className="albumlist--info-artist">Beach Slang</span>
                                <ul>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;