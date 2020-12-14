import './playlists.scss';
import Lazyload from 'react-lazyload';

function Playlists(props){
    //make an array of objects that contain title, link and image path and loop through that to render the items below
    console.log(props.playlist);
    const year = new Date();
    return(
        <section className="playlists">
            <div className="playlists--inner">
                <h5 className="playlists--title">Also Check These Out</h5>
                <div className="playlists--scroll">
                    {/* <div className="playlists--item"><a href="https://www.youtube.com/playlist?list=PLU8FrQ7tP8P7YAgfg-OAYWPdkmrUpRP12" target="_blank" rel="noopener noreferrer"><Lazyload once><img src="./../../playlist-singles.jpg" title="2020 Singles Playlist" alt="2020 Singles Playlist" /></Lazyload></a></div> */}
                    {
                        props.playlist.map((item,index) => (
                            <div className="playlists--item" key={index}>
                                <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer">
                                    <Lazyload once>
                                        <img src={item.image} title={item.title} alt={item.title} />
                                    </Lazyload>
                                </a>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <footer>
                <span>&copy; {year.getFullYear()} albertobonora.com | Powered by Wordpress and React</span>
            </footer>
        </section>
    )
}
export default Playlists;