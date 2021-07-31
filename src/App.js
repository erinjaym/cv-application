import React, { Component } from "react";
import General from "./components/general";
import Workhistory from "./components/Workhistory";
import Education from "./components/Education";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import CvResults from "./components/CvResults";
import Menu from "./components/Menu";
import MainButtons from "./components/MainButtons";

 class App extends Component {
   constructor(props){
   super(props);

   this.state = {
     section: <General 
              first="Your"
              last="Name"
              phone="101-101-1001"
              email="email@email.com"
              intro="About Me"
              handleData={this.handleGeneralData} 
              goToEducation={this.educationChange}
              goToWork={this.workChange} 
              goToGeneral={this.generalChange}
              />,
        
      first: "Your",
      last: "Name",
      phone: "101-101-1001",
      email: "email@email.com",
      intro: "About Me",
      id: 0,
      cv: false,
      menu: false,
   };

   this.goRight = this.goRight.bind(this);
   this.goLeft = this.goLeft.bind(this);
   this.displayCv = this.displayCv.bind(this);
   this.displayMenu = this.displayMenu.bind(this);
   this.educationChange = this.educationChange.bind(this);
   this.workChange = this.workChange.bind(this);
   this.generalChange = this.generalChange.bind(this);
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
              section: <General 
                        handleData={this.handleGeneralData} 
                        data={this.state} 
                        first={this.state.first} 
                        last={this.state.last} 
                        phone={this.state.phone} 
                        email={this.state.email} 
                        intro={this.state.intro}/>,
              id: 0
            }
          }else if (prevState.id === 0){
            return {
              section: <Education handleData={this.handleEducationData} data={this.state}/>,
              id: 1
            }
          }else if(prevState.id === 1){
            return {
              section: <Workhistory handleData={this.handleWorkData} data={this.state}/>,
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
              section: <Workhistory handleData={this.handleWorkData} data={this.state}/>,
              id: 2
            }
          }else if (prevState.id === 1){
            return {
              section: <General 
              handleData={this.handleGeneralData} 
              data={this.state} 
              first={this.state.first} 
              last={this.state.last} 
              phone={this.state.phone} 
              email={this.state.email} 
              intro={this.state.intro}/>,
              id: 0
            }
          }else if(prevState.id === 2){
            return {
              section: <Education handleData={this.handleEducationData} data={this.state}/>,
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
      section: <General 
                handleData={this.handleGeneralData} 
                data={this.state} 
                first={this.state.first} 
                last={this.state.last} 
                phone={this.state.phone} 
                email={this.state.email} 
                intro={this.state.intro}/>,
      cv: false,
    });  
  }else if (this.state.id === 1){
    return   this.setState ({
      section: <Education handleData={this.handleEducationData} data={this.state} />,
      cv: false,
    });  
  }else if(this.state.id === 2){
    return   this.setState ({
      section: <Workhistory handleData={this.handleEducationData} data={this.state}/>,
      cv: false,
    }); 
  }else{
    return this.setState ({
      section: <Menu  goToEducation={this.educationChange} goToWork={this.workChange} goToGeneral={this.generalChange}/>,
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
    section: <Menu goToEducation={this.educationChange} goToWork={this.workChange} goToGeneral={this.generalChange}/ >,
    menu: true
  });
}
}

returnFromMenu () {
  if (this.state.id === 0){
    return   this.setState ({
      section: <General 
              handleData={this.handleGeneralData} 
              data={this.state} 
              first={this.state.first} 
              last={this.state.last} 
              phone={this.state.phone} 
              email={this.state.email} 
              intro={this.state.intro}/>,
      menu: false,
    });  
  }else if (this.state.id === 1){
    return   this.setState ({
      section: <Education handleData={this.handleEducationData} data={this.state}/>,
      menu: false,
    });  
  }else if(this.state.id === 2){
    return   this.setState ({
      section: <Workhistory handleData={this.handleEducationData} data={this.state}/>,
      menu: false,
    }); 
  }else{
    return this.setState ({
      section: <CvResults data={this.state}/>,
      menu: false,
    })
  }
}


workChange () {
  console.log ("changed shit");
  this.setState (prevState => {
   return {
      section: <Workhistory handleData={this.handleGeneralData} data={this.state}/>,
      id: 2
   }
  })
}

educationChange () {
  this.setState ({
  section: <Education handleData={this.handleGeneralData} data={this.state}/>,
  id: 1
  });
}

generalChange () {
this.setState ({
  section: <General 
          handleData={this.handleGeneralData} 
          data={this.state} 
          first={this.state.first} 
          last={this.state.last} 
          phone={this.state.phone} 
          email={this.state.email} 
          intro={this.state.intro}/>,
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
          <MainButtons showCv={this.displayCv.bind(this)} showMenu={this.displayMenu.bind(this)}/>
        </div>
      </div>
  </div>
  }
}

export default App; 