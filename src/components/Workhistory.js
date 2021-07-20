import React from 'react';
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const WorkHistory = (props) => {
    const { WorkHistory } = props

    return (
            <div id="workHistoryMain" className="main">
            <h1><center>Work History</center></h1>
            <form id="workHistoryForm" action=""> 
                <div id="jobName" className="formContent">
                    <label for="name">Employer Name</label>
                    <input type="text" id="name" placeholder="Bobs Used Cars" maxlength="15"></input>
                </div>

                <div id="datesSection" className="formContent">
                Dates of Employment
                    <label for="startDate" >From</label>
                    <input type="date" className="employment-dates" id="startDate"></input>
                    <label for="endDate">To</label>
                    <input type="date" className="employment-dates" id="endDate"></input>
                </div><br></br>

                <div id="titleSection" className="formContent">
                    <label for="jobTitle">Title</label>
                    <input type="text" id="jobTitle" placeholder="Commander" maxlength="30"></input>
                </div>
            
                <div id="jobDescriptionSection" className="formContent">
                    <label for="jobDescription">Job Responsibilities</label>
                    <textarea id="jobDescription" placeholder="Doing all the things" rows="6" columns="20"></textarea>
                </div><br></br><br></br>

                <div id="add" className="formContent">
                    <button className="save-button" type="submit">Add</button> 
                    <button id="clearWorkHistory" className="delete-button">Clear</button>
                </div>
            </form>
            </div>
    );
}


export default WorkHistory;