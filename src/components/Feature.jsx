import React from "react";

const Feature = props => {
  const { icon, title, description } = props;
  return (
    <div>
      <img src={icon} alt="computer" className="img-fluid mb-4" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
