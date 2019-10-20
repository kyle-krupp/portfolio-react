import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from "./components/projects";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <About />
            <Timeline />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
