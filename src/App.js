import React, { Component } from "react";
import General from "./components/general";
import Education from "./components/Education";
import WorkHistory from "./components/Workhistory";
import CvResult from "./components/CvResult";

 class App extends Component {
 
  render() {
  return <div className="wrapper">
      <h1>CV Maker 1.0</h1>
      <General />
      <Education />
      <WorkHistory />
      <CvResult />
      </div>
  }
}

export default App; 
