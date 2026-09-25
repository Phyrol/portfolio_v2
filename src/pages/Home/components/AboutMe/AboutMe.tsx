import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_LINK, PHONE_NUMBER, SMALL_SCREEN_MEDIA_QUERY} from "common/constants";
import {useMediaQuery} from "common/utils";
import {HomePageSection} from "pages/Home/constants";

const ABOUT_ME_DESCRIPTION =
    "Frontend Engineer with 4+ years of experience building and modernizing customer-facing AWS consoles. \
        Experienced in owning complex features end-to-end, from technical design and implementation through testing, operational readiness, and launch. \
        Strong background in React, TypeScript, JavaScript, AWS, frontend architecture, testing infrastructure, and performance optimization, with experience leading cross-team initiatives and modernizing mature codebases.";

export const AboutMe = () => {
    const isWide = useMediaQuery(SMALL_SCREEN_MEDIA_QUERY);

    return (
        <section className="space-y-12">
            <div className="space-y-2">
                <div className="space-y-3">
                    <h1 className="text-anti-flash-white text-4xl font-bold sm:text-5xl">Bradley Potzka</h1>
                    <h2 className="text-cadet-gray font text-lg">Software Developer, Game Developer</h2>
                </div>

                <div className="[&>*]:after:text-cadet-gray [&>a]:text-red-rojo [&>*]:hover:text-red-pantone flex flex-wrap space-x-2 text-base [&>*]:after:ml-2 [&>*]:not-last:after:content-['|']">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

                    <span className="inline-block text-nowrap">{PHONE_NUMBER}</span>

                    <a href={GITHUB_PROFILE_LINK} target={"_blank"} rel="noreferrer">
                        GitHub
                    </a>

                    <a href={LINKED_IN_LINK} target={"_blank"} rel="noreferrer">
                        LinkedIn
                    </a>

                    <a href={ITCHIO_PROFILE_LINK} target={"_blank"} rel="noreferrer">
                        itch.io
                    </a>
                </div>
            </div>

            <div>
                {!isWide && <h2 className="section-header mb-5">{HomePageSection.ABOUT}</h2>}

                <p>{ABOUT_ME_DESCRIPTION}</p>
            </div>
        </section>
    );
};
