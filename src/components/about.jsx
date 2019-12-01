import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>Web Developer living in Portsmouth, NH. </p>
                      <p>
                        Full-Stack JavaScript development. Currently working in
                        front-end development for{" "}
                        <a href="https://www.dapresy.com/" target="_blank">
                          Dapresy.
                        </a>
                      </p>
                      <p>Freelance WordPress developer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">EXPERIENCE</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="fas fa-layer-group" />
                  </span>
                  <div className="desc">
                    <h3>Progressive Web Apps </h3>
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-database"></i>
                        </span>
                        MongoDB database
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-server"></i>
                        </span>
                        Express server routing
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fab fa-react"></i>
                        </span>
                        React UI
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fab fa-node-js"></i>
                        </span>
                        Node runtime environment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="fas fa-code" />
                  </span>
                  <div className="desc">
                    <h3>Technical Skills</h3>
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fab fa-html5"></i>
                        </span>
                        HTML 5
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fab fa-css3-alt"></i>
                        </span>
                        CSS 3
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fab fa-js"></i>
                        </span>
                        JavaScript (ES6)
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-code-branch"></i>
                        </span>
                        Git version control
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="fab fa-wordpress" />
                  </span>
                  <div className="desc">
                    <h3>Content Management Systems</h3>
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-network-wired"></i>
                        </span>
                        Website hosting & setup
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-pen-nib"></i>
                        </span>
                        Wireframe & design
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-code"></i>
                        </span>
                        Development
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-user-tie"></i>
                        </span>
                        Training & Maintenance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
