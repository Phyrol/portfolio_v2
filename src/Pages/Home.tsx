import "./Home.css";

const ABOUT_ME_DESCRIPTION =
    "Results-driven Frontend Engineer with experience building scalable and intuitive web applications at Amazon. \
                Demonstrated ability to lead complex projects end-to-end, mentor cross-functional teams, and improve system reliability and customer experience. \
                Skilled in TypeScript, JavaScript, React, Cypress, and AWS tools. \
                Adept at problem-solving in ambiguous environments, driving process improvements, and implementing performance-optimized UI features.";

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

            <section>
                <h2>About me</h2>
                <p>{ABOUT_ME_DESCRIPTION}</p>
            </section>
        </main>
    );
};

export default Home;
