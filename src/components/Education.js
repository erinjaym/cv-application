import React from 'react';

const Education = (props) => {
    const { Education } = props

    return (

        <div id="educationSection" className="education">
            <div id="left-arrow" class="arrow-left"></div>

            <div id="education-main" className="main">
            <h1><center>Education</center></h1>
            <form id="educationlInfoForm"> 
                <div id="nameSection" className="formContent">
                    <label for="name">School Name</label>
                    <input type="text" id="name" placeholder="Metropolitan State University of Denver" maxlength="50"></input>
                </div>

                <div id="datesSection" className="formContent">
                    <label for="gradDate">Date of Graduation</label>
                    <input type="date" id="gradDate"></input>
                </div>

                <div id="majorSection" className="formContent">
                    <label for="major">Major</label>
                    <input type="text" id="major" placeholder="Computer Science" maxlength="30"></input>
                </div>
            
                <div id="minorSection" className="formContent">
                    <label for="minor">Minor</label>
                    <input type="text" id="minor" placeholder="Japanese" maxlength="30"></input>
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit">Save</button> 
                    <button id="clearEducation" className="delete-button" type="">Clear</button>
                </div>
            </form>
            </div>

            <div id="right-arrow" class="arrow-right"></div>
        </div>
    );
}


export default Education;