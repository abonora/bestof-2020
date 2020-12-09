import React, { Component,PropTypes } from 'react';
import './floatingPlayer.scss';
class FloatingPlayer extends Component{
    
    render() {
        const closeHandler = this.props.closeHandler;
        return(
            <div className={this.props.playerLoaded ? 'floatingplayer' : 'floatingplayer hidden'}>
                <div className="floatingplayer--info">
                    <span className="floatingplayer--info-album">{this.props.YTid.album}</span>
                    <span className="floatingplayer--info-artist">{this.props.YTid.artist}</span>
                    <span className="floatingplayer--info-number">{this.props.YTid.rank}</span>
                </div>
                <iframe key={this.props.YTid} width="300" height="300" src={'https://www.youtube.com/embed/'+this.props.YTid.id+'?autoplay=1'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
                <button className="floatingplayer--close" onClick={() => closeHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59.25" height="59.25" viewBox="0 0 59.25 59.25">
                        <path id="ic_highlight_off_24px" d="M39.3,19.775l-7.673,7.673-7.673-7.673-4.177,4.177,7.673,7.673L19.775,39.3l4.177,4.177L31.625,35.8,39.3,43.475,43.475,39.3,35.8,31.625l7.673-7.673ZM31.625,2A29.625,29.625,0,1,0,61.25,31.625,29.6,29.6,0,0,0,31.625,2Zm0,53.325a23.7,23.7,0,1,1,23.7-23.7A23.731,23.731,0,0,1,31.625,55.325Z" transform="translate(-2 -2)"/>
                    </svg>

                </button>
            </div>
        )
    }
}

export default FloatingPlayer;

