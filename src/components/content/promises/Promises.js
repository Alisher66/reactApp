import PromisesItem from "./PromisesItem";

import img1 from '../../../assets/images/diamond.png';
import img2 from '../../../assets/images/acces.png';
import img3 from '../../../assets/images/team.png';


function Promises(props) {
    return (
        <section className="promises">
            <div className="container">
                <h3 className="subtitle">{props.subtitle}</h3>
                <h2 className="title">{props.title}</h2>
                <div className="promises-box__inner">
                    <PromisesItem img={img1} />
                    <PromisesItem img={img2} />
                    <PromisesItem img={img3} />
                </div>
            </div>
        </section>
    );
}

export default Promises;