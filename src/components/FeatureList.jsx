import React from "react";
import Feature from "./Feature";
import anywhere from "../images/icon-access-anywhere.svg";
import files from "../images/icon-any-file.svg";
import colaboration from "../images/icon-collaboration.svg";
import security from "../images/icon-security.svg";
const Features = () => {
  return (
    <section className="text-light pt-5 text-center" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 mb-5  mr-0 mr-sm-5">
            <Feature
              icon={anywhere}
              title="Access your files, anywhere"
              description="the ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
            />
          </div>
          <div className="col-12 col-sm-4 mb-5  ml-0 ml-sm-5">
            <Feature
              icon={security}
              title="Security you can trust"
              description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
            />
          </div>
          <div className="w-100" />
          <div className="col-12 col-sm-4 mb-5 mr-0 mr-sm-5">
            <Feature
              icon={colaboration}
              title="Real-time collaboration"
              description="Securely share files and folders with friends, family and collegues for live collaboration. No email attachments required."
            />
          </div>
          <div className="col-12 col-sm-4 mb-5 ml-0 ml-sm-5">
            <Feature
              icon={files}
              title="Store any type of file"
              description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely sotred and shared."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
