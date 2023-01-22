import { FunctionComponent } from "react";

interface IconLinkProps {
    iconUrl: string;
    linkUrl: string;
}

const IconLink: FunctionComponent<IconLinkProps> = (props: IconLinkProps) => {
    return (
        <div>
            <a href={props.linkUrl} target="_blank">
                <img
                    src={props.iconUrl}
                    className="object-fill h-10 w-10"
                ></img>
            </a>
        </div>
    );
};

export default IconLink;
