import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/App";
import data from "./data/forecasts.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={data.location} forecasts={data.forecasts} />
  </React.StrictMode>
);
