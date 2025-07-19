import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_LINK, PHONE_NUMBER} from "common/constants";

const Header = () => {
    return (
        <section className="space-y-2">
            <div className="space-y-3">
                <p className="text-sm">Hi, my name is</p>
                <h1 className="text-anti-flash-white text-4xl font-bold sm:text-5xl">Bradley Potzka</h1>
                <h2 className="text-cadet-gray font text-lg">Software Developer, Game Developer</h2>
            </div>

            <div className="[&>*]:after:text-cadet-gray [&>a]:text-red-rojo [&>*]:hover:text-red-pantone flex flex-wrap space-x-2 text-base [&>*]:after:ml-2 [&>*]:not-last:after:content-['|']">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span className="inline-block text-nowrap">{PHONE_NUMBER}</span>
                <a href={GITHUB_PROFILE_LINK} target={"_blank"} rel="noreferrer">
                    GitHub
                </a>
                <a href={ITCHIO_PROFILE_LINK} target={"_blank"} rel="noreferrer">
                    itch.io
                </a>
                <a href={LINKED_IN_LINK} target={"_blank"} rel="noreferrer">
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Header;
