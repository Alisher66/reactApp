
import FooterInfo from "./footerTop/FooterInfo";
import FooterContacts from "./footerTop/FooterContacts";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <FooterInfo />
                </div>      
            </div>
        </footer>
    );
}

export default Footer;