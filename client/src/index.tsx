import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
// Grommet
import { Box, Grommet } from "grommet";
import { grommetTheme } from "./styles/theme";
// Components
import { Login } from "./sections/Login";
// SW
import * as serviceWorker from "./serviceWorker";
// Additional styles
import "./styles/reset.css";
import { Header } from "./lib/components/Header";

const App = () => {
  return (
    <Grommet theme={grommetTheme} full>
      <Box fill>
        <Header>Title</Header>
        <Box
          direction="row"
          flex
          overflow={{ horizontal: "hidden" }}
          justify="center"
        >
          <Box flex align="center" justify="center" responsive>
            <Login />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
