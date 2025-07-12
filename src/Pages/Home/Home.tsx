import "./Home.css";
import AboutMe from "pages/Home/AboutMe/AboutMe";
import Projects from "pages/Home/Projects/Projects";
import Work from "pages/Home/Work/Work";

const Home = () => {
    return (
        <main className="space-y-24">
            <section>
                <span className="flex-col">
                    <p>Hi, my name is</p>
                    <h1>Bradley Potzka</h1>
                    <h2>Software Developer, Game Developer</h2>
                </span>

                <p>
                    <a href="mailto:bradleypotzka39@gmail.com">bradleypotzka39@gmail</a>
                    &nbsp;|&nbsp; (480) 440-5081 &nbsp;|&nbsp;
                    <a href="https://github.com/Phyrol" target={"_blank"} rel="noreferrer">
                        GitHub
                    </a>
                    &nbsp;|&nbsp;
                    <a href="https://phyrol.itch.io/" target={"_blank"} rel="noreferrer">
                        itch.io
                    </a>
                    &nbsp;|&nbsp;
                    <a href="https://www.linkedin.com/in/bradleypotzka/" target={"_blank"} rel="noreferrer">
                        LinkedIn
                    </a>
                </p>
            </section>

            <AboutMe />

            <Work />

            <Projects />
        </main>
    );
};

export default Home;
