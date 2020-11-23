import './landing.scss';

function Landing(props){
    return(
        <section className="landing">
            <div className="landing--inner">
                <h3 className="landing--title">{props.title}</h3>
                <h2 className="landing--subtitle">{props.site}</h2>
            </div>
        </section>
    )
}
export default Landing;