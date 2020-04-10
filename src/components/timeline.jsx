import React, { Component } from "react";
import Skills from "./skills";

export default class Timeline extends Component {
  render() {
    const { desc, icon, timeline, title, company, skills } = this.props.details;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="timeline-centered">
            <article
              className="timeline-entry animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="timeline-entry-inner">
                <div className={icon}>
                  <i className="icon-code" />
                </div>
                <div className="timeline-label">
                  <h2>
                    {title}
                    <span> {timeline}</span>
                    <br></br>
                    <span>{company}</span>
                  </h2>
                  <p>{desc}</p>
                  <div className="skill-cards">
                    {Object.keys(skills).map((key) => (
                      <Skills info={skills[key]} key={key} index={key} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
