import AboutMe from "pages/Home/AboutMe/AboutMe";
import Projects from "pages/Home/Projects/Projects";
import Work from "pages/Home/Work/Work";

const Home = () => {
    return (
        <main className="space-y-24">
            <section>
                <span className="space-y-4">
                    <p>Hi, my name is</p>
                    <h1>Bradley Potzka</h1>
                    <h2>Software Developer, Game Developer</h2>
                </span>

                <div className="[&>*]:after:text-cadet-gray space-x-2 [&>*]:after:ml-2 [&>*]:after:content-['|']">
                    <a href="mailto:bradleypotzka39@gmail.com">bradleypotzka39@gmail</a>
                    <span>(480) 440-5081</span>
                    <a href="https://github.com/Phyrol" target={"_blank"} rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://phyrol.itch.io/" target={"_blank"} rel="noreferrer">
                        itch.io
                    </a>
                    <a href="https://www.linkedin.com/in/bradleypotzka/" target={"_blank"} rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </section>

            <AboutMe />

            <Work />

            <Projects />
        </main>
    );
};

export default Home;
