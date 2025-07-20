import {GITHUB_PROFILE_LINK} from "common/constants";
import Home from "pages/Home/Home";

const App = () => {
    return (
        <div className="w-11/13 max-w-7xl">
            <Home />

            <footer className="mb-6 sm:mb-8 md:mb-10">
                <div className="flex min-w-full justify-center">
                    <a href={`${GITHUB_PROFILE_LINK}/portfolio`} target={"_blank"} rel="noreferrer" className="hover:text-red-rojo">
                        <p className="text-base">Built by Bradley Potzka</p>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
