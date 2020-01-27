import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    const { image, name, price, desc, demo, repo, stack } = this.props.details;

    return (
      <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
        <div className="project" style={{ backgroundImage: `url(${image})` }}>
          <div className="desc">
            <div className="con">
              <h3>
                <a href={demo} target="_blank">
                  {name}
                </a>
              </h3>
              <span>{desc}</span>
              <br></br>
              <span>Stack: {stack}</span>
              <p className="icon">
                <span>
                  {demo ? (
                    <a href={demo} target="_blank">
                      <i className="icon-link" /> Demo
                    </a>
                  ) : null}
                </span>
                <span>
                  {repo ? (
                    <a href={repo} target="_blank">
                      <i className="icon-github" /> Source
                    </a>
                  ) : null}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
