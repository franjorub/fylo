import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import FeatureList from "./FeatureList";
import "../sass/site.scss";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <FeatureList />
    </div>
  );
};

export default App;
