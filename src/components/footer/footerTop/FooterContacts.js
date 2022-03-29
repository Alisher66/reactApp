import adressIcon from "../../../assets/images/adress.png";
import phoneIcon from "../../../assets/images/phone__icon.png";
import emailIcon from "../../../assets/images/email_icon.png";
import timeIcon from "../../../assets/images/time.png";

function FooterContacts() {
    return (
        <div className="footer__contacts">
            <h4 className="footer__title">
                CONTACT
            </h4>
            <p className="contacts__item"><img src={adressIcon} alt="" />
                321 Pikes Place Parkway Seattle, WA 54321</p>
            <p className="contacts__item"><img src={phoneIcon} alt="" /> (555) 765-4321</p>
            <p className="contacts__item"> <img src={emailIcon} alt="" />Info@company.com</p>
            <p className="contacts__item"> <img src={timeIcon} alt="" />Mon - Sat:  7:000 am - 6:00 pm</p>
        </div>
    );
}

export default FooterContacts;