function SocialIcon(props) {
    console.log(props);
    return (
        <li className="social__item">
            <a href={props.icon.url} className="social__link">
                <img src={props.icon.img} alt={props.icon.title} />
            </a>
        </li>
    );
}

export default SocialIcon;