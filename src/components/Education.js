import React from 'react';

const Education = (props) => {
    const { Education } = props

    return (

        <div id="educationSection" className="education">
            <h1><center>Education</center></h1>
            <form id="generalInfo"> 
                <div id="nameSection" className="formContent">
                    <label for="name">School Name</label>
                    <input type="text" id="name" placeholder="insert name" maxlength="15"></input>
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
    );
}


export default Education;