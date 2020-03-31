import React from "react";
import { Router } from "@reach/router";

//import component
import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

// import styles
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
  </>
);

export default App;
