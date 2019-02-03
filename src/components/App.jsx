import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import FeatureList from "./FeatureList";
import "../sass/site.scss";
import Team from "./Team";
import Testimonials from "./Testimonials";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <FeatureList />
      <Team />
      <Testimonials />
    </div>
  );
};

export default App;
