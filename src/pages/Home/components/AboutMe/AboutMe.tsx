import {HomePageSection} from "pages/Home/Home";

const ABOUT_ME_DESCRIPTION =
    "Results-driven Frontend Engineer with experience building scalable and intuitive web applications at Amazon. \
                Demonstrated ability to lead complex projects end-to-end, mentor cross-functional teams, and improve system reliability and customer experience. \
                Skilled in TypeScript, JavaScript, React, Cypress, and AWS tools. \
                Adept at problem-solving in ambiguous environments, driving process improvements, and implementing performance-optimized UI features.";

const AboutMe = () => {
    return (
        <section className="space-y-2">
            <h2 className="section_header">{HomePageSection.ABOUT}</h2>
            <p>{ABOUT_ME_DESCRIPTION}</p>
        </section>
    );
};

export default AboutMe;
