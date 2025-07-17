import AboutMe from "pages/Home/components/AboutMe";
import Projects from "pages/Home/components/Projects";
import Work from "pages/Home/components/Work";
import Header from "pages/Home/components/Header";

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
