import About from "./components/About";
import Banner from "./components/Banner";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Banner />
            <About />
        </div>
    );
};

export default Home;
