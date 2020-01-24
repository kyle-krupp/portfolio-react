import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import projects from "./projectLibrary";

class App extends Component {
  state = {
    projects: {}
  };

  componentDidMount() {
    this.setState({ projects });
    console.log("mounted");
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <About />
            <Timeline />

            <div>
              <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div
                      className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <span className="heading-meta">My Work</span>
                      <h2 className="colorlib-heading animate-box">
                        Recent Projects
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    {Object.keys(this.state.projects).map(key => (
                      <Projects
                        details={this.state.projects[key]}
                        key={key}
                        index={key}
                      />
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box">
                      <p>
                        <a
                          href="#"
                          className="btn btn-primary btn-lg btn-load-more"
                        >
                          Load more <i className="icon-reload" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
