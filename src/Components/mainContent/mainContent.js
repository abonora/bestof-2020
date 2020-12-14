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
                result.sort((a, b) => b.meta_box.rank - a.meta_box.rank);
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
                    <p>In a year where everything literally felt like it was turned upside down, one thing didn't seem to be affected, the quality of music released in 2020. I don't know if it was everything that was going on or Youtube/Google's recommendation engine guiding me in a certain direction, but this year I found myself listening to heavier music. I've always been into Rock and over the years gotten into some more metal. However this year I was deep into metal and screaming metal. I've grown to enjoy the fast paced instrumentals with breakdowns in between. Of course mixed in with that was the Indie, Alternative and Rock genres. There also always seems to be a Rap/Hip-Hop album that cracks my list of best of and this year it’s to Run The Jewels, an excellent album. 2020 also saw some fresh releases from some favourite bands: Deftones, The Killers, The Strokes and Pearl Jam. Also found some awesome new bands: Bad Cop/Bad Cop, Starbenders, Trivium and more! Take some time and enjoy the list I've put together. I've collected 3 tracks from each of these albums that were my stand out tracks. Scroll to the very bottom of the site and you'll find some playlist links.<br/><br/>Enjoy,<br/>alberto</p>
                    {
                        this.state.error &&
                        <h1>{this.state.error}</h1>
                    }
                    {
                        !this.state.isLoaded &&
                        <div className="loading">
                            <div className="loading--spinner"></div>
                        </div>
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