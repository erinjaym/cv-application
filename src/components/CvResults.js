import React from 'react';
import Header from "./Header.jpg";
import General from "./general";

class CvResults extends React.Component {
    constructor(props){
    super(props);

    }
    render(){

    return (
        <div id="cv-result" className="cv-display">

            <div id="pi" className="personal-information-section">
                <div id="pi-sidebar"><img src={Header} height="200px" width="200px"/></div>
                <div 
                id="personal-intro" className="personal-information">
                    <div name="first" id="name" className="full-name">
                        {this.props.data.first} 
                        {' ' + this.props.data.last}
                    </div>
                    <div id="spacer"> </div>
                        Phone:
                    <div id="phone-number">
                        {this.props.data.phone}
                    </div>
                        E-mail:
                    <div id="email">
                        {this.props.data.email}
                    </div>
                        Objective:
                    <div id="self-intro">
                        {this.props.data.intro}
                    </div>
                </div>

            </div>

            <div id="educa" className="education-information-section">
                <div id="edu-title" className="title">Education History</div>
                <div id="edu-info" className="education-information">
                    Shool:<div id="school-name">MSU DENVER</div>
                    Date of Graduation:<div id="grad-date">10/21/21</div>
                    Major:<div id="major">Comp Sci </div>
                    Minor:<div id="minor">Japanese</div>
                    GPA:<div id="gpa">3.5</div>
                </div>
            </div>

            <div id="work-hist" className="work-information-section">
                <div 
                id="wh-title" 
                className="title">
                    Work History
                </div>
                    <div 
                    id="work-info" 
                    className="work-information">
                    Employer: 
                    <div id="employer-name">
                        {this.props.data.company}
                    </div>
                    Position Title: 
                    <div 
                    id="position-title">
                        {this.props.data.jobTitle}
                    </div>
                    Dates Of Employment: 
                    <div id="date-of-employ">
                        {this.props.data.startDate + '-' + this.props.data.endDate}
                    </div>
                    Job Responsibilities: 
                    <div id="job-resp">
                        {this.props.data.jobSkills}
                    </div>
                    </div>
            </div>
        </div>
    );

    } // render
}
export default CvResults;