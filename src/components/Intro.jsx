import React from "react";
import intro from "../images/illustration-intro.png";
const Intro = () => {
  return (
    <section className="container-fluid mt-2 pt-5" id="intro">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6">
          <img src={intro} alt="intro" srcset="" className="img-fluid" />
        </div>
        <div className="w-100" />
        <div className="col-12 col-sm-5 mt-5 text-light text-center">
          <h2 className="pb-3">
            All your files in one secure location, accesible anywhere.
          </h2>
        </div>
        <div className="w-100" />
        <div className="col-12 col-sm-4 text-light text-center">
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever You need, share and collaborate with friends
            and family, and co-workers
          </p>
        </div>
        <div className="w-100" />
        <button type="button" className="button">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Intro;
