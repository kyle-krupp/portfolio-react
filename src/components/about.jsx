import React, { Component } from "react";
import Typewriter from "typewriter-effect";

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
                      <span className="heading-meta">Full Stack</span>
                      <h2 className="colorlib-heading">Web Developer</h2>
                      <span className="typewriter">
                        <strong>
                          {" "}
                          I make execellent, modern{" "}
                          <Typewriter
                            options={{
                              strings: ["web apps", "websites"],
                              autoStart: true,
                              loop: true
                            }}
                          />
                        </strong>
                      </span>
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
                <span className="heading-meta">
                  Here's an overview of what I've used
                </span>
                <h2 className="colorlib-heading">Tech</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
