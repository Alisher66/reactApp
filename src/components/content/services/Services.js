import ServiceItem from "./ServiceItem";
import Button from "../../Button";

import icon1 from "../../../assets/images/1icon.png";
import icon2 from "../../../assets/images/2icon.png";
import icon3 from "../../../assets/images/3icon.png";
import icon4 from "../../../assets/images/4icon.png";
import icon5 from "../../../assets/images/5icon.png";
import icon6 from "../../../assets/images/6icon.png";

function Services(props) {
    return (
        <section className="services">
            <div className="container">
                <h3 className="subtitle"> {props.subtitle}</h3>
                <h2 className="title">{props.title}</h2>
                <div className="services__box">
                    <ServiceItem img={icon1} title="Multi Point Inspections" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                    <ServiceItem img={icon2} title="Tires" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                    <ServiceItem img={icon3} title="Auto Repair" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                    <ServiceItem img={icon4} title="Auto Maintenance" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                    <ServiceItem img={icon5} title="Service Warranty" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                    <ServiceItem img={icon6} title="Shop Online" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas." />
                </div>
                <Button text="Learn More"/>
            </div>
        </section>
    );
}

export default Services;