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
                      <div className="timeline-icon color-4">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Frontend Developer <span> Sep 2019 - Jan 2020</span>
                        </h2>
                        <p>
                          Worked on the global webdesign team for a
                          ASP.NET/React SaaS platform.
                        </p>
                        <p>
                          Created custom scripts using Vanilla JS/jQuery for
                          advanced solutions on a client-need basis. Developed
                          custom authentication views, and webdesign theming for
                          online dashboards.
                        </p>

                        <p>
                          Architected the rebranded development of{" "}
                          <a href="dapresy.com" target="_blank">
                            Dapresy.com
                          </a>{" "}
                          for a go-to-market product launch.
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
                          Technical Project Manager - Dapresy North America,
                          Inc. <span> Dec 2017 - Aug 2018</span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Served as the liaison between clients and a
                              product
                            </li>
                            <li>
                              Coordinated technical discussions for customized
                              SSO and API integrations
                            </li>
                            <li>
                              Scoped requirements needed for front-end and
                              back-end code
                            </li>
                          </ul>
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
                          <ul>
                            <li>
                              Six-month coding bootcamp for full-stack web
                              development, culminating in a proficiency with
                              both front-end and server-side JavaScript using
                              the MERN stack
                            </li>
                            <li>
                              Core competencies: JavaScript (Node.js, React),
                              MySQL + MongoDB administration, creating API’s
                              using Express
                            </li>
                            <li>
                              Fundamental competencies: C#, Django, Java,
                              Laravel
                            </li>
                          </ul>
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
                          Data Visualization Manager - Dapresy North America,
                          Inc.
                          <span> June 2017 - Dec 2018</span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Wireframed and scoped project delivery converting
                              raw datasets into online dashboards using a
                              proprietary SaaS dashboarding platform
                            </li>
                            <li>
                              Used system expertise to build and deploy online
                              data visualization dashboards to thousands of end
                              users for market research agencies and large
                              corporations
                            </li>
                          </ul>
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
