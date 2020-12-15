import React, { Component } from 'react';
import './App.scss';
import Landing from './Components/landing/landing';
import MainContent from './Components/mainContent/mainContent';
import Playlists from './Components/playlists/playlists';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-683832-1', {
  debug: false,
  titleCase: false
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [
        {
          title: "2020 Singles Playlist",
          link: "https://www.youtube.com/playlist?list=PLU8FrQ7tP8P7YAgfg-OAYWPdkmrUpRP12",
          image: "/music/bestof20/playlist-singles.jpg"
        },
        {
          title: "YouTube Music 2020 Metal Playlist",
          link: "https://music.youtube.com/playlist?list=RDCLAK5uy_kdj05g3j2epDRBPguSMBU3hm4rX4nlpLg&feature=share&playnext=1",
          image: "/music/bestof20/playlist-metal.jpg"
        },
        {
          title: "YouTube Music 2020 Punk Playlist",
          link: "https://music.youtube.com/playlist?list=RDCLAK5uy_mQmPoJ7Ray-n-7pQ0gnf5Tq67RuATSKO4&feature=share&playnext=1",
          image: "/music/bestof20/playlist-punk.jpg"
        },
        {
          title: "YouTube Music 2020 Rock Playlist",
          link: "https://music.youtube.com/playlist?list=RDCLAK5uy_m4c1fOfyBgYm9FbIts1s_toooYFTjEtjE",
          image: "/music/bestof20/playlist-rock.jpg"
        }
      ]
    }
  }
  
  componentDidMount() {
		ReactGA.pageview(window.location.pathname)
	}
  render() {
    return (
      <div className='app'>
        <Landing title="Best Albums of 2020" site="albertobonora.com"/>
        <MainContent title="Best Albums of 2020" site="albertobonora.com" year="2020"/>
        <Playlists playlist={this.state.playlist}/>
      </div>
    );
  }
}

export default App;