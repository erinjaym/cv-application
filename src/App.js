import React, { Component } from "react";
import General from "./components/general";
import Education from "./components/Education";
import WorkHistory from "./components/Workhistory";

 class App extends Component {
 
  render() {
  return <div> Hello world and other things! 
    <General />
    <Education />
    <WorkHistory />
  </div>
  }
}

export default App; 
