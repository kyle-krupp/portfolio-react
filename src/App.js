import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import projects from "./projectLibrary";
import skills from "./skillsLibrary";
import Skills from "./components/skills";
import backendSkills from "./backendSkillsLibrary";
import BackendSkills from "./components/backendSkills";
import jobs from "./timelineLibrary";

class App extends Component {
  state = {
    projects: {},
    skills: {},
    backendSkills: {},
    jobs: {}
  };

  componentDidMount() {
    this.setState({ projects, skills, backendSkills, jobs });
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <About />

            <div className="skill-cards">
              {Object.keys(this.state.skills).map(key => (
                <Skills info={this.state.skills[key]} key={key} index={key} />
              ))}
            </div>
            <div className="skill-cards">
              {Object.keys(this.state.backendSkills).map(key => (
                <BackendSkills
                  info={this.state.backendSkills[key]}
                  key={key}
                  index={key}
                />
              ))}
            </div>

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
                  {Object.keys(this.state.jobs).map(key => (
                    <Timeline
                      details={this.state.jobs[key]}
                      key={key}
                      index={key}
                    />
                  ))}
                </div>
              </section>
            </div>

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
