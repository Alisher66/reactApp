import Logo from "../../Logo";
import SocialIcon from "./SocialIcon";

import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import instagram from "../../../assets/images/instagram.png";
import youtube from "../../../assets/images/youtube.png";

const icons = [
    {title:"facebook", img: facebook, url:"#" },
    {title:"twitter", img: twitter, url:"#" },
    {title:"instagram", img: instagram, url:"#" },
    {title:"youtube", img: youtube, url:"#" },
];

function FooterInfo() {
    return (
        <div className="footer__info">
            <a href="#"><Logo /></a>                      
            <p>This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua.</p>
            
            <ul className="social-icon">
                <SocialIcon icon = {icons[0]}/>
                <SocialIcon icon = {icons[1]}/>
                <SocialIcon icon = {icons[2]}/>
                <SocialIcon icon = {icons[3]}/>
            </ul>
        </div>    
    );
}

export default FooterInfo;