import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="Expercience">
      <h5 className="text-light">Meine Fähigkeiten</h5>
      <h2 className="text-light">Abgeschloßene Projekte</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaScript/TypeScript</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>React</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>Angular</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaFX</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>HTML5 and CSS</h5>
                <progress value="30" max="100"></progress>
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
                <h5>HTML5</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaFX</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaFX</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
            <article className="experience_details" title="Etwas">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h5>JavaFX</h5>
                <progress value="30" max="100"></progress>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
