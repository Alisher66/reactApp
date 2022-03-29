
function FooterMenu() {
    return (
        <div className="footer__links">
            <h4 className="footer__title">EXPLORE LINKS</h4>
            <div className="links__wrap">
                <ul className="footer__links-list">
                    <li className="footer__links-item"><a className="footer_item-link" href="">About</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">Services</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">Specials</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">Estimates</a></li>
                </ul>
                <ul className="footer__links-list">
                    <li className="footer__links-item"><a className="footer_item-link" href="">Reviews</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">Shop</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">Careers</a></li>
                    <li className="footer__links-item"><a className="footer_item-link" href="">FAQs</a></li>
                </ul>
            </div>
            
        </div>
    );
}

export default FooterMenu;