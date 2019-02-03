import React from "react";
import quotes from "../images/bg-quotes.png";
import profile1 from "../images/profile-1.jpg";
import Testimonial from "./Testimonial";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
const Testimonials = () => {
  return (
    <section
      className="container-fluid pt-5 pb-5 text-white pr-5 pl-5"
      id="testimonials"
    >
      <img src={quotes} alt="quotes" className="quotes img-fluid" />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 pb-4">
          <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore nesciunt fugiat nulla officia quidem dignissimos quia ipsam, provident ex placeat molestiae, recusandae dolore sit voluptatem eius non ad sunt."
            name="Satish Patel"
            description="Founder &amp; CEO, Huddle"
            avatar={profile1}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 pb-4">
          <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore nesciunt fugiat nulla officia quidem dignissimos quia ipsam, provident ex placeat molestiae, recusandae dolore sit voluptatem eius non ad sunt."
            name="Satish Patel"
            description="Founder &amp; CEO, Huddle"
            avatar={profile2}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore nesciunt fugiat nulla officia quidem dignissimos quia ipsam, provident ex placeat molestiae, recusandae dolore sit voluptatem eius non ad sunt."
            name="Satish Patel"
            description="Founder &amp; CEO, Huddle"
            avatar={profile3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
