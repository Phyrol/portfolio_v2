import AboutMe from "./AboutMe/AboutMe";
import "./Home.css";
import Work from "./Work/Work";

const Home = () => {
    return (
        <main>
            <section className="min-h-96">
                <span className="flex-col">
                    <p>Hi, my name is</p>
                    <h1>Bradley Potzka</h1>
                    <h2>Software Developer, Game Developer</h2>
                </span>
            </section>

            <AboutMe />

            <Work />
        </main>
    );
};

export default Home;
