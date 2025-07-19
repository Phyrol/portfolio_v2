import MAIL_ICON from "assets/icons/mail_icon.svg";
import GITHUB_ICON from "assets/icons/github_icon.svg";
import ITCHIO_ICON from "assets/icons/itchio_icon.svg";
import LINKEDIN_ICON from "assets/icons/linkedin_icon.svg";
import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_LINK} from "common/constants";

interface LinkAndIcon {
    link: string;
    icon: React.ReactNode;
}

const LINKS_AND_ICONS: LinkAndIcon[] = [
    {
        link: EMAIL,
        icon: <MAIL_ICON />,
    },
    {
        link: GITHUB_PROFILE_LINK,
        icon: <GITHUB_ICON />,
    },
    {
        link: ITCHIO_PROFILE_LINK,
        icon: <ITCHIO_ICON />,
    },
    {
        link: LINKED_IN_LINK,
        icon: <LINKEDIN_ICON />,
    },
];

const SocialLinkNav = () => {
    return (
        <div className="flex">
            <ul className="[&>*]:after:text-cadet-gray space-y-3">
                {LINKS_AND_ICONS.map(({link, icon}) => (
                    <li>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-anti-flash-white space-y-6 duration-200 [&>*]:h-6 [&>*]:w-6"
                        >
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinkNav;
