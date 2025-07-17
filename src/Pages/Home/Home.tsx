import AboutMe from "pages/Home/AboutMe/AboutMe";
import Projects from "pages/Home/Projects/Projects";
import Work from "pages/Home/Work/Work";
import Header from "./Header/Header";

const Home = () => {
    return (
        <main className="flex flex-col space-y-24">
            <Header />

            <AboutMe />

            <Work />

            <Projects />
        </main>
    );
};

export default Home;
