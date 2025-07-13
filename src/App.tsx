import Home from "pages/Home/Home";

const App = () => {
    return (
        <div>
            <Home />

            {/* TODO: Finalize footer component */}
            <footer>
                <div className="flex min-w-full justify-center">
                    <a href="https://github.com/Phyrol/portfolio" target={"_blank"} rel="noreferrer">
                        Built by Bradley Potzka
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
