import React from 'react';

const General = (props) => {
    const { General } = props

    return (
        <div id="generalSection" className="general">
            <div id="left-arrow" class="arrow-left"></div>
            
            <div id="personal-main" className="general-main">
            <h1><center>Personal Information</center></h1>
            <form id="generalInfo"> 
                <div id="nameSectionFirst" className="formContent">
                    <label for="firstName">First name</label>
                    <input type="text" id="firstName" placeholder="Billy" maxlength="15"></input>
                </div>

                <div id="nameSectionLast" className="formContent">
                    <label for="lastName">Last name</label>
                    <input type="text" id="lastName" placeholder="Bojangles" maxlength="15"></input>
                </div>

                <div id="dobSection" className="formContent">
                    <label for="dob">Date of birth</label>
                    <input type="date" id="dob"></input>
                </div>

                <div id="addressSection" className="formContent">
                    <label for="address">Address</label>
                    <input type="text" id="address" placeholder="address" maxlength="15"></input>
                </div>
            
                <div id="emailSection" className="formContent">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="bojangles@bojangles.com" maxlength="30"></input>
                </div>

                <div id="aboutSection" className="formContent">
                    <label for="about">Self Intro</label>
                    <textarea id="about" placeholder="Self Introduction" rows="6" columns="20"></textarea>
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit">Save</button> 
                    <button id="clearGeneral" className="delete-button">Clear</button>
                </div>

                
            </form>
            </div>

            <div id="right-arrow" class="arrow-right"></div>

        </div>
    );
}


export default General;