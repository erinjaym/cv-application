import React, { Component } from "react";
import General from "./components/general";
import Workhistory from "./components/Workhistory";
import Education from "./components/Education";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";

 class App extends Component {
   constructor(props){
   super(props);

   this.state = {
     section: <General />,
     id: 0,
   };

   //this.workChange = this.workChange.bind(this); (may add buttons to specific section later. Will omit if not. 
   this.goRight = this.goRight.bind(this);
   this.goLeft = this.goLeft.bind(this);
   }

   goRight () {
    this.setState (prevState => {
          if (prevState.id === 2){
            return{
              section: <General />,
              id: 0
            }
          }else if (prevState.id === 0){
            return {
              section: <Education />,
              id: 1
            }
          }else if(prevState.id === 1){
            return {
              section: <Workhistory />,
              id: 2
            }
          }
          else {}
    })
  }


  goLeft () {
    this.setState (prevState => {
          if (prevState.id === 0){
            return{
              section: <Workhistory />,
              id: 2
            }
          }else if (prevState.id === 1){
            return {
              section: <General />,
              id: 0
            }
          }else if(prevState.id === 2){
            return {
              section: <Education />,
              id: 1
            }
          }
          else {}
    })
  }



workChange () {
  console.log ("changed shit");
  this.setState (prevState => {
   return {
      section: <Workhistory />,
      id: 2
   }
  })
}

educationChange () {
  this.setState ({
  section: <Education />,
  id: 1
  });
}

generalChange () {
this.setState ({
  section: <General />,
  id: 0
});
}

  render() {
  return <div className="wrapper">
      <h1>CV Maker 1.0</h1>
      <div className="general">
        <div><LeftArrow goLeft={this.goLeft.bind(this)}/></div>
        {this.state.section}
        <div><RightArrow goRight={this.goRight.bind(this)}/></div>
      </div>
  </div>
  }
}

export default App; 