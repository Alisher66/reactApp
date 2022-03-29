import img from  "../../../assets/images/who-we-are.jpg";
function About(props) {
    return (
        <section className="who-we">
            <div className="container">
                <div className="who-we__box">
                    <h3 className="subtitle">{props.subtitle}</h3>
                    <h2 className="title">{props.title}</h2>
                    <p className="who-we__text">{props.content}</p>
                    <img src={img} alt="who-we-are" />
                </div>
            </div>
        </section>
    );
}

export default About;