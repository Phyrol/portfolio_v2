import logo from "./logo.svg";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="text-3xl font-bold text-red-300 underline">Hello World!</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
