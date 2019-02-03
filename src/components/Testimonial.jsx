import React from "react";

const Testimonial = props => {
  const { text, name, description, avatar } = props;
  return (
    <div className="testimonial p-4 rounded">
      <p>{text}</p>
      <div className="row">
        <div className="col-3">
          <img src={avatar} alt="" className="img-fluid rounded-circle" />
        </div>
        <div className="col">
          <p className="m-0">{name}</p>
          <p>
            <small>{description}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
