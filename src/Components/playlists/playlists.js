import './playlists.scss';
import Lazyload from 'react-lazyload';

function Playlists(props){
    const year = new Date();
    return(
        <section className="playlists">
            <div className="playlists--inner">
                <h5 className="playlists--title">Also Check These Out</h5>
                <div className="playlists--scroll">
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