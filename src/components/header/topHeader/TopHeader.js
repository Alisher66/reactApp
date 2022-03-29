import Logo from '../../Logo';

function TopHeader() {
    return (
        <div className="header__top">
            <Logo />
            <div className="header__info">
                <p className="watch">SERVICE HOURS<br />
                    Mon - Sat: 7:00 am - 6:00 pm</p>
                <p className="call-us">CALL US <br />
                     555) Car-Repair</p>
                    <button className="button">Make an Appointment</button>
            </div>
        </div>
    );
}

export default TopHeader;