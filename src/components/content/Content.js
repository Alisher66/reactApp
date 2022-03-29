import About from "./about/About";
import Promises from "./promises/Promises";

function Content() {
    return (
        <main className="main">
            <About subtitle="Who we are" title="Nemo enim ipsam voluptatem quia <br /> voluptas in proident"
            content="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." />

            <Promises subtitle="OUR PROMISE TO YOU" title="Sed perspiciatis omnis iste natus"/>

        </main>
    );
}

export default Content;