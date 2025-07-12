import Home from "./Pages/Home/Home";
import "./App.css";

const App = () => {
    return (
        <div>
            <Home />

            {/* TODO: Finalize footer component */}
            <footer>
                <div>
                    <a href="https://github.com/Phyrol/portfolio" target={"_blank"} rel="noreferrer">
                        Built by Bradley Potzka
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
