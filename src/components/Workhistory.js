import React, { useState } from 'react';

const WorkHistory = (props) => {

    const [company, setCompany] = useState (props.company);
    const [startDate, setStartDate] = useState (props.startDate);
    const [endDate, setEndDate] = useState (props.endDate);
    const [jobTitle, setJobTitle] = useState (props.jobTitle);
    const [jobSkills, setJobSkills] = useState (props.jobSkills);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCompanyChange = (e) => {
        setCompany (e.target.value)
    }

    const handleStartDateChange = (e) => {
        setStartDate (e.target.value)
    }

    const handleEndDateChange = (e) => {
        setEndDate (e.target.value)
    }

    const handleJobTitleChange = (e) => {
        setJobTitle (e.target.value)
    }

    const handleJobSkillsChange = (e) => {
        setJobSkills (e.target.value)
    }

        return (
        <div 
        id="workHistoryMain" 
        className="main">
            <h1><center>Work History</center></h1>
                <form id="workHistoryForm" onSubmit={handleSubmit}> 
                    <div id="employer-name" className="formContent">
                        <label for="employer-name">
                            Employer Name
                        </label>
                        <input 
                        name="company"
                        type="text" 
                        id="employer-name" 
                        maxlength="20"
                        value={company} 
                        onChange={handleCompanyChange}
                        />
                    </div>

                    <div id="datesSection" className="formContent">
                    Dates of Employment: <br/>
                        <label for="startDate" >
                        From
                        </label>
                        <input 
                        name="startDate"
                        type="date" 
                        className="employment-dates" 
                        id="startDate" 
                        value={startDate}
                        onChange={handleStartDateChange}
                        />
                        <label for="endDate">
                            To
                        </label>
                        <input 
                        name="endDate"
                        type="date" 
                        className="employment-dates" 
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange} 
                        />
                    </div><br/>

                <div id="titleSection" className="formContent">
                    <label for="jobTitle">
                        Title
                    </label>
                    <input 
                    name="jobTitle"
                    type="text" 
                    id="jobTitle" 
                    maxlength="30"
                    value={jobTitle}
                    onChange={handleJobTitleChange} 
                    />
                </div>
            
                <div id="jobDescriptionSection" className="formContent">
                    <label for="jobDescription">
                        Job Responsibilities
                    </label>
                    <textarea 
                    name="jobSkills"
                    id="jobDescription" 
                    rows="6" columns="20"
                    value={jobSkills}
                    onChange={handleJobSkillsChange} 
                    />
                </div><br/><br/>

                <div id="add" className="formContent">
                    <button className="save-button" type="submit" onClick={() => props.handleData({company, startDate, endDate, jobSkills, jobTitle})}>Save</button> 
                </div>
            </form>
        </div>
        );
}
export default WorkHistory;