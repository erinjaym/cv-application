import React from 'react';

const General = (props) => {
    const { General } = props

    return (
        <div id="generalSection" className="general">
            <h1><center>General Information</center></h1>
            <form id="generalInfo"> 
                <div id="nameSection" className="formContent">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="insert name" maxlength="15"></input>
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
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit">Save</button> 
                    <button id="clearGeneral" className="delete-button">Clear</button>
                </div>
            </form>
        </div>
    );
}


export default General;