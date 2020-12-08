import React, { Component } from 'react';
import FloatingPlayer from './../floatingPlayer/floatingPlayer';
import './mainContent.scss';

class MainContent extends Component {
  constructor() {
    super();
    
    this.state = {
        //closePlayer: true,
        selectedVideo: '',
        playerLoaded: false,
        testAB: 'i am here'
    };

    this.closePlayer = this.closePlayer.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

    closePlayer(){
        this.setState({
            selectedVideo: '', 
            playerLoaded: false
        });
    };

    playVideo(e){
        const video = e.currentTarget.getAttribute("data-youtubeid");
        let currentState = this.state.playerLoaded;

        if(currentState === false){
            this.setState({ 
                selectedVideo: video,
                playerLoaded: true
            });
        }else{
            this.setState({ 
                selectedVideo: video
            });
        }
        
        
    };
  
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
                {/* Instead of a modal use a floating player on desktop and tablet. mobile still display the player below the entry*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ex, blandit vel massa et, laoreet bibendum nibh. In eu lorem lorem. Vivamus felis neque, ultricies nec mi nec, feugiat tincidunt orci. Nunc mi nunc, tristique nec tempus eget, faucibus vel neque. Nam bibendum nibh quis augue pulvinar commodo. Nulla at convallis massa. Cras eros justo, pretium pellentesque sollicitudin sodales, mollis ac tellus. Praesent ut eleifend velit, ac vestibulum est. Vestibulum fermentum massa et iaculis suscipit. Etiam sit amet odio dolor. Integer bibendum, metus et consectetur placerat, dolor erat imperdiet diam, et cursus magna orci egestas tellus. Phasellus ornare velit et leo dictum, quis malesuada orci congue. Nullam dapibus odio vitae tortor eleifend luctus. Aenean suscipit augue suscipit auctor dictum. Integer luctus commodo rutrum.</p>
                <div className="albumlist">
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover" onClick={this.playVideo} data-youtubeid="LsMhCVlnZ7Y">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover" onClick={this.playVideo} data-youtubeid="Y2ujSvAUkh0" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    {/* <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                    <div className="albumlist--entry">
                        <div className="albumlist--info">
                            <div className="albumlist--info-cover">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                                    <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                                </svg>

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
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                    <li className="albumlist--info-listitem">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                                <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                            </svg> Track Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="albumlist--media"></div>
                    </div>
                     */}
                     <FloatingPlayer height="200" width="200" YTid={this.state.selectedVideo} playerLoaded={this.state.playerLoaded} closeHandler={this.closePlayer}/>
                </div>
            </div>
        </div>
    );
  }
}

export default MainContent;