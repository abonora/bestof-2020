function Album(props){
    const youtubeid = props.item.ytid;
    const artist = props.item.artist;
    const rank = props.item.rank;
    const album = props.item.album;
    const tracks = props.item.tracks;
    const img = '';
    return(
        <div className="albumlist--entry">
            <div className="albumlist--info">
                <div className="albumlist--info-cover"
                    onClick={props.playHandler}
                    data-entryinfo-youtubeid={youtubeid}
                    data-entryinfo-artist={artist}
                    data-entryinfo-album={album}
                    data-entryinfo-rank={rank}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.781 47.781">
                        <path id="ic_play_circle_outline_24px" d="M21.112,36.641,35.447,25.891,21.112,15.14ZM25.891,2A23.891,23.891,0,1,0,49.781,25.891,23.9,23.9,0,0,0,25.891,2Zm0,43A19.112,19.112,0,1,1,45,25.891,19.138,19.138,0,0,1,25.891,45Z" transform="translate(-2 -2)" fill="#fff"/>
                    </svg>

                    <img src="https://albertobonora.com/feeds/wp-content/uploads/2019/11/Sleater-Kinney_-_The_Center_Wont_Hold.jpg" />
                    <span>{rank}</span>
                </div>
                <div className="albumlist--info-details">
                    <span className="albumlist--info-title">{album}</span>
                    <span className="albumlist--info-artist">{artist}</span>
                    <ul className="albumlist--info-list">
                        {tracks.map((track, index) =>{
                            return <li className="albumlist--info-listitem" key={index}>
                                <a onClick={props.playHandler}
                                    data-entryinfo-youtubeid={track.link}
                                    data-entryinfo-artist={artist}
                                    data-entryinfo-album={album}
                                    data-entryinfo-rank={rank}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11.611">
                                        <path id="ic_headset_24px" d="M8.5,1A5.5,5.5,0,0,0,3,6.5v4.278a1.831,1.831,0,0,0,1.833,1.833H6.667V7.722H4.222V6.5a4.278,4.278,0,1,1,8.556,0V7.722H10.333v4.889h1.833A1.831,1.831,0,0,0,14,10.778V6.5A5.5,5.5,0,0,0,8.5,1Z" transform="translate(-3 -1)" fill="#fff"/>
                                    </svg> {track.title}
                                </a>
                            </li>
                          })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Album;