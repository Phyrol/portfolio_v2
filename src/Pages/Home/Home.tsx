import AboutMe from "pages/Home/components/AboutMe";
import Projects from "pages/Home/components/Projects";
import Work from "pages/Home/components/Work";
import Header from "pages/Home/components/Header";
import {ReactNode} from "react";

export enum HomePageSection {
    ABOUT = "About",
    WORK = "Work",
    PROJECTS = "Projects",
}

const SECTION_TO_ELEMENT_MAP: {[section in HomePageSection]: ReactNode} = {
    [HomePageSection.ABOUT]: <AboutMe />,
    [HomePageSection.WORK]: <Work />,
    [HomePageSection.PROJECTS]: <Projects />,
};

const Home = () => {
    return (
        <main className="flex flex-col space-y-18">
            <Header />

            {Object.entries(SECTION_TO_ELEMENT_MAP).map(([section, el]) => (
                <div id={section}>{el}</div>
            ))}
        </main>
    );
};

export default Home;
