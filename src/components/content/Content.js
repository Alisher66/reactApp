import About from "./about/About";
import Promises from "./promises/Promises";
import Services from "./services/Services";

function Content() {
    return (
        <main className="main">
            <About subtitle="Who we are" title="Nemo enim ipsam voluptatem quia <br /> voluptas in proident"
            content="Ut enim ad minima veniam, quis no illum qui dolorem eum fugiat quo voluptas nulla pariatur." />
            <Promises subtitle="OUR PROMISE TO YOU" title="Sed perspiciatis omnis iste natus"/>
            <Services subtitle="Our Services" title="Sed perspiciatis omnis iste natus"/>
        </main>
    );
}

export default Content;