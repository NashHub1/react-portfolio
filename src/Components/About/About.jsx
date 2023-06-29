import React from "react";
import Michael from '../../Assets/MeAndEinstein.png'

const About = () => {
  return (
    <section id="About">
      <h5>Good to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Michael}  alt="Michael Stephens" />
          </div>
        </div>
        <div className="about_content">
        <div className="about_cards">
        <article className="about_card">

        </article>
        </div>

        </div>


      </div>
    </section>
  );
};

export default About;
