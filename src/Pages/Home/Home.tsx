import {ReactNode} from "react";
import AboutMe from "pages/Home/components/AboutMe";
import Projects from "pages/Home/components/Projects";
import Work from "pages/Home/components/Work";
import Header from "pages/Home/components/Header";
import NavBar from "common/components/NavBar";

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
        <main className="grid grid-cols-[1fr_3fr] [&>*]:py-8 [&>*]:sm:py-16 [&>*]:md:py-24">
            <div className="sticky top-0 h-screen">
                <NavBar ids={Object.values(HomePageSection)} />
            </div>

            <div className="flex flex-col space-y-18">
                <Header />

                {Object.entries(SECTION_TO_ELEMENT_MAP).map(([section, el]) => (
                    <div id={section}>{el}</div>
                ))}
            </div>
        </main>
    );
};

export default Home;
