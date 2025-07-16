import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <div className="flex w-full justify-center px-80">
            <App />
        </div>
    </React.StrictMode>
);
