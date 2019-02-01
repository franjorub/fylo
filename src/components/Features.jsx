import React from "react";
import anywhere from "../images/icon-access-anywhere.svg";
import files from "../images/icon-any-file.svg";
import colaboration from "../images/icon-collaboration.svg";
import security from "../images/icon-security.svg";
const Features = () => {
  return (
    <section className="container text-light mt-5 pt-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 mb-5 pb-5 mr-5">
          <img src={anywhere} alt="computer" className="img-fluid mb-4" />
          <h3>Access your files, anywhere</h3>
          <p>
            the ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="col-12 col-sm-4 mb-5 pb-5 ml-5">
          <img src={security} alt="computer" className="img-fluid mb-4" />
          <h3>security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="w-100" />
        <div className="col-12 col-sm-4 mr-5">
          <img src={colaboration} alt="computer" className="img-fluid mb-4" />
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and collegues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="col-12 col-sm-4 ml-5">
          <img src={files} alt="computer" className="img-fluid mb-4" />
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely sotred and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
