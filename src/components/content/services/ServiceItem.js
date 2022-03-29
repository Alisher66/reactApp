

function ServiceItem(props) {
    return (
        <div className="box__item">
            <img className="services-box__icon" src={props.img} alt="" />
            <h4 className="services-box__title">{props.title}</h4>
            <p className="services-box-text">{props.text}</p>
        </div>     
    );
}

export default ServiceItem;