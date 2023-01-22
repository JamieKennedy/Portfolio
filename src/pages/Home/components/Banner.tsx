import { FunctionComponent } from "react";
import IconLink from "../../../components/UI/IconLink";

interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <div className="h-96 bg-sky-500 flex flex-col justify-center">
            <div className="flex justify-center">
                <h1 className="font-bold text-7xl text-white">
                    <span className="text-slate-700">J</span>amie{" "}
                    <span className="text-slate-700">K</span>ennedy
                </h1>
            </div>
            <div className="flex justify-center">
                <h3 className="font-bold text-3xl text-white">
                    A Full Stack Web Developer
                </h3>
            </div>
            <div className="flex justify-center space-x-4 pt-2">
                <IconLink
                    iconUrl="icons/github.png"
                    linkUrl="https://github.com/JamieKennedy"
                />
                <IconLink
                    iconUrl="icons/linkedin.png"
                    linkUrl="https://www.linkedin.com/in/jamiekennedy98/"
                />
            </div>
        </div>
    );
};

export default Banner;
