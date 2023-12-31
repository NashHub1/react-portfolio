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
              {/* <h5>Erfahrung</h5> */}
              <h5>Experience</h5>
              {/* <small>2 Jahren kontinuierlich in der Programmierung engagiert</small> */}
              <small>2 years continuously involved in coding</small>
            </article>
            <article className="about_card">
              <RiTeamFill className="about_icon" />
              {/* <h5>Projekte</h5> */}
              <h5>Projects</h5>
              {/* <small>+5 Projekte in verschieden Sprachen</small> */}
              <small>Over 5 projects across multiple languages</small>
            </article>
          </div>

          <p>Bachelor's degree in industrial engineering for electrical and information technology.
          Strong software development skills and a passion for programming.
          Interest in exciting projects and active participation in agile software development.
          Willing to develop innovative solutions and contribute to the success of a team.
          </p>
          <a href="#Contact" className="btn btn_primary">Let's Talk</a>
        </div>


      </div>
    </section>
  );
};

export default About;
