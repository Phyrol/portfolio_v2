import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_LINK, PHONE_NUMBER, SMALL_SCREEN_MEDIA_QUERY} from "common/constants";
import {useMediaQuery} from "common/utils";
import {HomePageSection} from "pages/Home/Home";

const ABOUT_ME_DESCRIPTION =
    "Results-driven Frontend Engineer with experience building scalable and intuitive web applications at Amazon. \
                Demonstrated ability to lead complex projects end-to-end, mentor cross-functional teams, and improve system reliability and customer experience. \
                Skilled in TypeScript, JavaScript, React, Cypress, and AWS tools. \
                Adept at problem-solving in ambiguous environments, driving process improvements, and implementing performance-optimized UI features.";

const AboutMe = () => {
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

                    <a href={ITCHIO_PROFILE_LINK} target={"_blank"} rel="noreferrer">
                        itch.io
                    </a>

                    <a href={LINKED_IN_LINK} target={"_blank"} rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div>
                {!isWide && <h2 className="section_header mb-5">{HomePageSection.ABOUT}</h2>}

                <p>{ABOUT_ME_DESCRIPTION}</p>
            </div>
        </section>
    );
};

export default AboutMe;
