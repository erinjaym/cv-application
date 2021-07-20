import React from 'react';
import Header from "./Header.jpg";

const CvResult = (props) => {
    const { CvResult } = props
    return (
        <div id="cv-result" className="cv-display">

            <div id="pi" className="personal-information-section">
                <div id="pi-sidebar"><img src={Header} height="200px" width="200px" /></div>
                <div id="personal-intro" className="personal-information">
                    <div id="name" className="full-name">Erin Moyer</div>
                    <div id="spacer"> </div>
                    Phone:<div id="phone-number">303-371-5257</div>
                    E-mail:<div id="email">even.a.rose@gmail.components</div>
                    Objective:<div id="self-intro">My Name is billy bojangles and I lke things that like me</div>
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
                <div id="wh-title" className="title">Work History</div>
                    <div id="work-info" className="work-information">
                    Employer: <div id="employer-name">Autozone</div>
                    Position Title: <div id="position-title">PSM</div>
                    Dates Of Employment: <div id="date-of-employ">2/22/25 - 3/33/98</div>
                    Job Responsibilities: <div id="job-resp">stuff and things with cars and stuff and things</div>
                    </div>
            </div>
        </div>
    );
}
export default CvResult;