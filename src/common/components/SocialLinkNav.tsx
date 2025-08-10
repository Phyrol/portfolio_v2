import MAIL_ICON from "assets/icons/mail_icon.svg";
import GITHUB_ICON from "assets/icons/github_icon.svg";
import ITCHIO_ICON from "assets/icons/itchio_icon.svg";
import LINKEDIN_ICON from "assets/icons/linkedin_icon.svg";
import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_LINK} from "common/constants";

interface LinkAndIcon {
    link: string;
    icon: React.ReactNode;
    label: string;
}

export const LINK_AND_ICON_LIST: LinkAndIcon[] = [
    {
        link: `mailto:${EMAIL}`,
        icon: <MAIL_ICON />,
        label: "Email",
    },
    {
        link: GITHUB_PROFILE_LINK,
        icon: <GITHUB_ICON />,
        label: "GitHub",
    },
    {
        link: ITCHIO_PROFILE_LINK,
        icon: <ITCHIO_ICON />,
        label: "Itch.io",
    },
    {
        link: LINKED_IN_LINK,
        icon: <LINKEDIN_ICON />,
        label: "LinkedIn",
    },
];

const SocialLinkNav = () => {
    return (
        <div className="flex">
            <ul className="space-y-4">
                {LINK_AND_ICON_LIST.map(({link, icon, label}) => (
                    <li key={link}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="hover:text-anti-flash-white space-y-6 duration-200 [&>*]:h-7 [&>*]:w-7"
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
