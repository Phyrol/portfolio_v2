import {ReactNode} from "react";
import AboutMe from "pages/Home/components/AboutMe";
import Projects from "pages/Home/components/Projects";
import Experience from "pages/Home/components/Experience";
import Header from "pages/Home/components/Header";
import NavBar from "common/components/NavBar";

export enum HomePageSection {
    ABOUT = "About",
    EXPERIENCE = "Experience",
    PROJECTS = "Projects",
}

const SECTION_TO_ELEMENT_MAP: {[section in HomePageSection]: ReactNode} = {
    [HomePageSection.ABOUT]: <AboutMe />,
    [HomePageSection.EXPERIENCE]: <Experience />,
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
                    <div key={section} id={section}>
                        {el}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;
