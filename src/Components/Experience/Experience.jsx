import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="Expercience">
      {/* <h5 className="text-light">Meine Fähigkeiten</h5> */}
      <h5 className="text-light">My Skills</h5>

      {/* <h2 className="text-light">Abgeschloßene Projekte</h2> */}
      <h2 className="text-light">Completed Projects</h2>


      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaScript/TypeScript</h5>
                <progress value="70" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>React</h5>
                <progress value="90" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaFX</h5>
                <progress value="50" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>HTML5 and CSS</h5>
                <progress value="80" max="100"></progress>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend  */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>Java</h5>
                <progress value="60" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>C</h5>
                <progress value="50" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>SQL</h5>
                <progress value="40" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>REST/MQTT/COAP</h5>
                <progress value="70" max="100"></progress>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
