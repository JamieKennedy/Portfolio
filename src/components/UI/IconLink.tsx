import { FunctionComponent } from "react";

interface IconLinkProps {
    iconUrl: string;
    linkUrl: string;
}

const IconLink: FunctionComponent<IconLinkProps> = (props: IconLinkProps) => {
    return (
        <div className="">
            <a href={props.linkUrl} target="_blank">
                <img
                    src={props.iconUrl}
                    className="transition-transform duration-250 object-fill h-10 w-10 hover:scale-110 hover:drop-shadow-2xl"
                ></img>
            </a>
        </div>
    );
};

export default IconLink;
