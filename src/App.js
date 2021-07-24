import React, { Component } from "react";
import General from "./components/general";
import Workhistory from "./components/Workhistory";
import Education from "./components/Education";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import CvResults from "./components/CvResults";
import Submit from "./components/Submit";
import MainButtons from "./components/MainButtons";

 class App extends Component {
   constructor(props){
   super(props);

   this.state = {
     section: <General handleData={this.handleGeneralData} />,
     id: 0,
     cv: false,
     menu: false
   };

   //this.workChange = this.workChange.bind(this); (may add buttons to specific section later. Will omit if not. 
   this.goRight = this.goRight.bind(this);
   this.goLeft = this.goLeft.bind(this);
   this.displayCv = this.displayCv.bind(this);
   this.backToBuild = this.backToBuild.bind(this);
   this.displayMenu = this.displayMenu.bind(this);
   }



handleGeneralData = (formData) => {
    this.setState ({...formData});
    this.displayMenu();
  }

handleEducationData = (formData) => {
  this.setState ({...formData});
  this.displayMenu();
}

handleWorkData = (formData) => {
  this.setState ({...formData});
  this.displayMenu();
}

   goRight () {
    this.setState (prevState => {
          if (prevState.id === 2){
            return{
              section: <General handleData={this.handleGeneralData}/>,
              id: 0
            }
          }else if (prevState.id === 0){
            return {
              section: <Education handleData={this.handleEducationData}/>,
              id: 1
            }
          }else if(prevState.id === 1){
            return {
              section: <Workhistory handleData={this.handleWorkData}/>,
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
              section: <Workhistory handleData={this.handleWorkData}/>,
              id: 2
            }
          }else if (prevState.id === 1){
            return {
              section: <General handleData={this.handleGeneralData}/>, 
              id: 0
            }
          }else if(prevState.id === 2){
            return {
              section: <Education handleData={this.handleEducationData}/>,
              id: 1
            }
          }
          else {}
    })
  }


displayCv (){
  if (this.state.cv)
  {
    return this.returnFromCv();
  }else {
    this.setState (prevState => {
      return { 
        section: <CvResults data={this.state}/>, 
        cv: true
      }
   });
  }
}

returnFromCv(){
  if (this.state.id === 0){
    return  this.setState ({
      section: <General handleData={this.handleGeneralData}/>,
      cv: false,
    });  
  }else if (this.state.id === 1){
    return   this.setState ({
      section: <Education handleData={this.handleEducationData}/>,
      cv: false,
    });  
  }else if(this.state.id === 2){
    return   this.setState ({
      section: <Workhistory handleData={this.handleEducationData}/>,
      cv: false,
    }); 
  }else{
    return this.setState ({
      section: <Submit data={this.state}/>,
      cv: false,
    })
  }

}

displayMenu() {
  if (this.state.menu)
  {
    return this.returnFromMenu();
  }else {
  this.setState ({
    section: <Submit />,
    menu: true
  });
}
}

returnFromMenu () {    
  if (this.state.id === 0){
    return   this.setState ({
      section: <General handleData={this.handleGeneralData}/>,
      menu: false,
    });  
  }else if (this.state.id === 1){
    return   this.setState ({
      section: <Education handleData={this.handleEducationData}/>,
      menu: false,
    });  
  }else if(this.state.id === 2){
    return   this.setState ({
      section: <Workhistory handleData={this.handleEducationData}/>,
      menu: false,
    }); 
  }else{
    return this.setState ({
      section: <CvResults data={this.state}/>,
      menu: false,
    })
  }
}


backToBuild (){
this.setState (prevState => {
  return {
    section: <General handleData={this.handleGeneralData}/>,
    id: 0
  }
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
  section: <General handleData={this.handleGeneralData}/>,
  id: 0
});
}

  render() {
  return <div className="wrapper">
      <h1>CV Maker 1.0</h1>
      <div id="interface-wrapper" className="interface-wrapper">
        <div className="interface">
          <div ><LeftArrow goLeft={this.goLeft.bind(this)}/></div>
          {this.state.section}
          <div><RightArrow goRight={this.goRight.bind(this)}/></div>
        </div>
        
        <div id="menu-buttons">
          <MainButtons showCv={this.displayCv} showMenu={this.displayMenu}/>
        </div>
      </div>
  </div>
  }
}

export default App; 