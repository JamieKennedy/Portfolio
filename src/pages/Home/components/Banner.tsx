import { FunctionComponent } from "react";
import IconLink from "../../../components/UI/IconLink";

interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <header className="min-h-400 flex aspect-banner w-full flex-col justify-start space-y-2 bg-wave bg-cover bg-center bg-no-repeat p-24 font-oswald">
            <div className="flex justify-center ">
                <h1 className="text-center text-7xl font-bold text-white drop-shadow-2xl">
                    <span className="text-sky-500">J</span>amie{" "}
                    <span className="text-sky-500">K</span>ennedy
                </h1>
            </div>
            <div className="flex justify-center text-center">
                <h2 className="text-3xl font-bold text-white">
                    Full Stack Web Developer
                </h2>
            </div>
            <div className="flex justify-center space-x-1 text-center align-middle text-xl font-bold text-white">
                <span className="material-symbols-outlined">home_pin</span>
                <h3 className="">North West, England</h3>
            </div>
            {/* <div className="flex justify-center space-x-4 pt-2">
                <IconLink
                    iconUrl="icons/github.png"
                    linkUrl="https://github.com/JamieKennedy"
                />
                <IconLink
                    iconUrl="icons/linkedin.png"
                    linkUrl="https://www.linkedin.com/in/jamiekennedy98/"
                />
            </div> */}
        </header>
    );
};

export default Banner;
