import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-chart-bar-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Technical Project Manager at Dapresy North America,
                          Inc. <span> Dec 2017 - Present</span>
                        </h2>
                        <p>
                          I've worked as a project manager for deploying online
                          dashboards with cutting edge visualizations for market
                          research data. In addition I coordinate resources &
                          facilitate discussions centered around everything from
                          authentication methods to custom code development. I
                          am a student at heart and have tought myself how to
                          build resuable web design themes on our platform using
                          jQuery and CSS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Full-Stack Web Development Student
                          <span> June 2018 - Dec 2018</span>
                        </h2>
                        <p>
                          I completed a 6 - month coding bootcamp through the
                          University of New Hampshire. The program was a
                          rigorous but valuable experience as it focused on
                          hammering down the essentials, to becoming proficient
                          in modern web development technologies. A group
                          project was developed in a scrum like environment
                          after each progressive milestone. Some of my favorites
                          are included on this site!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-chart-line" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Data Visualization Manager{" "}
                          <span> June 2017 - Dec 2018</span>
                        </h2>
                        <p>
                          Integrated datasets via various data sources such as
                          third party API's. Wireframed and scoped dashboard
                          development lifecycles with user stories. Impelmented
                          graphic designs into live data visualizations. Worked
                          with front-end developers on custom script
                          requirements and application. Managed user
                          authentication and distribution for both small and
                          large corporations.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
