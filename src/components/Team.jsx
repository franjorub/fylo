import React from "react";
import team from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";
const Team = () => {
  return (
    <section id="team" className="text-white pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <img src={team} alt="team" className="img-fluid pb-4" />
          </div>
          <div className="col-12 col-sm-6 align-self-center">
            <h2>Stay productive, where yor are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              collagues for live collaborations. No email attachements required.
            </p>
            <a href="#team">
              See how Fylo works <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
