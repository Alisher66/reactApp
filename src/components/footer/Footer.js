
import FooterInfo from "./footerTop/FooterInfo";
import FooterMenu from "./footerTop/FooterMenu";
import FooterContacts from "./footerTop/FooterContacts";
import FooterBottom from "./footerBottom/FooterBottom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer-top__inner">
                        <FooterInfo />
                        <FooterMenu />
                        <FooterContacts />
                    </div>
                </div>   
            </div>
            <div class="footer__bottom">
                <div class="container">
                    <div class="footer__bottom-inner">
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;