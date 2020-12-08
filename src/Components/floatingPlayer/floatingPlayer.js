import React, { Component,PropTypes } from 'react';
import './floatingPlayer.scss';
class FloatingPlayer extends Component{
    
    render() {
        const closeHandler = this.props.closeHandler;
        return(
            <div className={this.props.playerLoaded ? 'floatingplayer' : 'floatingplayer hidden'}>
                <div className="floatingplayer--info">
                    <p className="">Album Title</p>
                    <p className="">Artist</p>
                    <p className="">#50</p>
                </div>
                <iframe key={this.props.YTid} width="300" height="300" src={'https://www.youtube.com/embed/'+this.props.YTid+'?autoplay=1'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
                <button className="floatingplayer--close" onClick={() => closeHandler()}>CLOSE</button>
            </div>
        )
    }
}

export default FloatingPlayer;

