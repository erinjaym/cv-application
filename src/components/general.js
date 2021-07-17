import React from 'react';

const General = (props) => {
    const { General } = props

    return (
        <div id="generalSection" className="general">
            <h1><center>General Information</center></h1>
            <form id="generalInfo"> 
                <div id="nameSection" className="generalContent">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="insert name" maxlength="15"></input>
                </div>

                <div id="dobSection" className="generalContent">
                    <label for="dob">Date of birth</label>
                    <input type="date" id="dob"></input>
                </div>

                <div id="addressSection" className="generalContent">
                    <label for="address">Address</label>
                    <input type="text" id="address" placeholder="address" maxlength="15"></input>
                </div>
            
                <div id="emailSection" className="generalContent">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="bojangles@bojangles.com" maxlength="30"></input>
                </div>
            </form>
        </div>
    );
}


export default General;