import Banner from "./components/Banner";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;
