import { FunctionComponent } from "react";
import IconLink from "../../../components/UI/IconLink";

interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <header className="aspect-banner min-h-400 w-full bg-center bg-wave bg-cover bg-no-repeat flex flex-col justify-start space-y-2 p-24 font-oswald">
            <div className="flex justify-center ">
                <h1 className="font-bold text-7xl text-white drop-shadow-2xl text-center">
                    <span className="text-sky-500">J</span>amie{" "}
                    <span className="text-sky-500">K</span>ennedy
                </h1>
            </div>
            <div className="flex justify-center text-center">
                <h2 className="font-bold text-3xl text-white">
                    Full Stack Web Developer
                </h2>
            </div>
            <div className="flex justify-center align-middle space-x-1 font-bold text-xl text-white text-center">
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
