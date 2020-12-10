import React, { Component } from 'react';
import FloatingPlayer from './../floatingPlayer/floatingPlayer';
import Album from './../album/album';
import './mainContent.scss';

class MainContent extends Component {
    constructor() {
        super();

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            selectedVideo: {
                artist: null,
                album: null,
                id: null,
                rank: null
            },
            playerLoaded: false
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
        const video = e.currentTarget.getAttribute("data-entryinfo-youtubeid");
        const artist = e.currentTarget.getAttribute("data-entryinfo-artist");
        const rank = e.currentTarget.getAttribute("data-entryinfo-rank");
        const album = e.currentTarget.getAttribute("data-entryinfo-album");
        let currentState = this.state.playerLoaded;

        if(currentState === false){
            this.setState({ 
                selectedVideo: {
                    artist: artist,
                    album: album,
                    id: video,
                    rank: rank
                },
                playerLoaded: true
            });
        }else{
            this.setState({ 
                selectedVideo: {
                    artist: artist,
                    album: album,
                    id: video,
                    rank: rank
                }
            });
        }
        
        
    };
  
    componentDidMount(){
        fetch("https://albertobonora.com/feeds/wp-json/wp/v2/albums?filter[category_name]=best-of-2020&filter[posts_per_page]=60")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        return (
            <div className="maincontent">
                <header>
                    <h6>{this.props.title}</h6>
                    <h6>{this.props.site}</h6>
                </header>
                <div className="maincontent--inner">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ex, blandit vel massa et, laoreet bibendum nibh. In eu lorem lorem. Vivamus felis neque, ultricies nec mi nec, feugiat tincidunt orci. Nunc mi nunc, tristique nec tempus eget, faucibus vel neque. Nam bibendum nibh quis augue pulvinar commodo. Nulla at convallis massa. Cras eros justo, pretium pellentesque sollicitudin sodales, mollis ac tellus. Praesent ut eleifend velit, ac vestibulum est. Vestibulum fermentum massa et iaculis suscipit. Etiam sit amet odio dolor. Integer bibendum, metus et consectetur placerat, dolor erat imperdiet diam, et cursus magna orci egestas tellus. Phasellus ornare velit et leo dictum, quis malesuada orci congue. Nullam dapibus odio vitae tortor eleifend luctus. Aenean suscipit augue suscipit auctor dictum. Integer luctus commodo rutrum.</p>
                    {
                        this.state.error &&
                        <h1>{this.state.error}</h1>
                    }
                    {
                        !this.state.isLoaded &&
                        <h1>LOADING</h1>
                    }
                    {
                        !this.state.error && this.state.isLoaded &&
                        <div className="albumlist">
                            {this.state.items.map(item => (
                                <Album key={item.id} item={item} playHandler={this.playVideo}/>
                            ))}
                            <FloatingPlayer height="200" width="200" YTid={this.state.selectedVideo} playerLoaded={this.state.playerLoaded} closeHandler={this.closePlayer}/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default MainContent;