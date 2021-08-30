import React, { useState } from 'react';

const Education = (props) => { 

    const [school, setSchool] = useState (props.school);
    const [gradDate, setGradDate] = useState (props.gradDate);
    const [major, setMajor] = useState (props.major)
    const [minor, setMinor] = useState (props.minor); 
    const [gpa, setGpa] = useState (props.gpa); 

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSchoolChange = (e) => {
        setSchool (e.target.value)
    }

    function handleGradDateChange (e) {
        setGradDate (e.target.value)
    }

    function handleMajorChange (e){
        setMajor (e.target.value)
    }

    function handleMinorChange (e) {
        setMinor (e.target.value)
    }

    function handleGpaChange (e) {
        setGpa (e.target.value)
    }
        return (
            <div id="education-main" className="main">
            <h1><center>Education</center></h1>
            <form id="educationlInfoForm" onSubmit={handleSubmit}> 
                <div id="school-name" className="formContent">
                    <label htmlFor="school">
                        School Name
                    </label>
                    <input 
                    name="school"
                    type="text" 
                    id="school" 
                    maxLength="50"
                    value={school}
                    onChange={handleSchoolChange}
                    />
                </div>

                <div id="datesSection" className="formContent">
                    <label htmlFor="gradDate">
                        Date of Graduation
                    </label>
                    <input
                    name="gradDate" 
                    type="date" 
                    id="gradDate"
                    value={gradDate}
                    onChange={handleGradDateChange}
                    />
                </div>

                <div id="majorSection" className="formContent">
                    <label htmlFor="major">
                        Major
                    </label>
                    <input 
                    name="major"
                    type="text" 
                    id="major" 
                    maxLength="30"
                    value={major}
                    onChange={handleMajorChange}
                    />
                </div>
            
                <div id="minorSection" className="formContent">
                    <label htmlFor="minor">
                        Minor
                    </label>
                    <input 
                    name="minor"
                    type="text" 
                    id="minor" 
                    maxLength="30"
                    value={minor}
                    onChange={handleMinorChange}
                    />
                </div>
                
                <div id="gpa-section" className="formContent">
                    <label htmlFor="gpa">
                        GPA:
                    </label>
                    <input
                    name="gpa"
                    type="text"
                    id="gpa"
                    maxLength="4"
                    value={gpa}
                    onChange={handleGpaChange}
                    />
                    </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit" onClick={() => props.handleData({school, gradDate, gpa, major, minor, })}>Save</button> 
                </div>
            </form>
            </div>
        );
}
export default Education;