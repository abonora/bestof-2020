import './playlists.scss';

function Playlists(props){
    const year = new Date();
    return(
        <section className="playlists">
            <div className="playlists--inner">
                <h5 className="playlists--title">Also Check These Out</h5>
                <div className="playlists--scroll">
                    <div className="playlists--item"><a href="#" target="_blank" rel="noopener noreferrer">2020 Singles Playlist</a></div>
                    <div className="playlists--item"><a href="https://music.youtube.com/playlist?list=RDCLAK5uy_mk6AmqcHgCRhyJuYsQz5CCVdCF4SRGivs&feature=share&playnext=1" target="_blank" rel="noopener noreferrer">YouTube Music 2020 Metal Playlist</a></div>
                    <div className="playlists--item"><a href="https://music.youtube.com/playlist?list=RDCLAK5uy_mQmPoJ7Ray-n-7pQ0gnf5Tq67RuATSKO4&feature=share&playnext=1" target="_blank" rel="noopener noreferrer">YouTube Music 2020 Punk Playlist</a></div>
                </div>
            </div>
            <footer>
                <span>&copy; {year.getFullYear()} albertobonora.com | Powered by Wordpress and React</span>
            </footer>
        </section>
    )
}
export default Playlists;