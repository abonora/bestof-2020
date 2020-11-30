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
                                <ul className="albumlist--info-list">
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
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