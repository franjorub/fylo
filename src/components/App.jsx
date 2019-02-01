import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import FeatureList from "./FeatureList";
import "../sass/site.scss";
import Team from "./Team";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <FeatureList />
      <Team />
    </div>
  );
};

export default App;
