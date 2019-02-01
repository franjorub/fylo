import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Features from "./Features";
import "../sass/site.scss";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Features />
    </div>
  );
};

export default App;
