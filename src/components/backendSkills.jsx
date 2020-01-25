import React, { Component } from "react";

export default class BackendSkills extends Component {
  render() {
    const { name, src, width, height, color } = this.props.info;
    return (
      <div
        className="skill-card"
        style={{
          borderBottom: `2px solid ${color}`
        }}
      >
        <img
          className="code-logo"
          src={src}
          width={width}
          height={height}
          alt={name}
        />
        <h3 className="skill-name">{name}</h3>
      </div>
    );
  }
}
