import React from "react";
import Michael from '../../Assets/MeAndEinstein.png'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'
import "./About.css"


const About = () => {
  return (
    <section id="About">
      <h5>Good to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Michael} alt="Michael Stephens" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsFileEarmarkCode className="about_icon" />
              <h5>Erfahrung</h5>
              <small>1,5 Jahre am programmieren</small>
            </article>
            <article className="about_card">
              <RiTeamFill className="about_icon" />
              <h5>Projekte</h5>
              <small>+10 Projekte in verschieden Sprachen</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, facere aspernatur voluptates quaerat,
            tempora nisi quisquam maiores exercitationem atque distinctio excepturi cupiditate? Perferendis,
            fugiat cupiditate autem aperiam nesciunt cum delectus?
          </p>
          <a href="#Contact" className="btn btn_primary">Let's Talk</a>
        </div>


      </div>
    </section>
  );
};

export default About;
