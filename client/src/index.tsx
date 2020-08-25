import React from "react";
import ReactDOM from "react-dom";

// Components

// SW
import * as serviceWorker from "./serviceWorker";
// Additional styles
import "./styles/reset.css";

const App = () => {
  return <p>elimina</p>;
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
