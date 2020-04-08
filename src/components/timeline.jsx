import React, { Component } from "react";
import BackendSkills from "./backendSkills";

export default class Timeline extends Component {
  render() {
    const { desc, icon, timeline, title } = this.props.details;
    const backendSkills = this.props.backendSkills;
    console.log(backendSkills);
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
                  </h2>
                  <p>{desc}</p>
                  {/* <div className="skill-cards">
                    {Object.keys(backendSkills).map((key) => (
                      <BackendSkills
                        info={backendSkills[key]}
                        key={key}
                        index={key}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
