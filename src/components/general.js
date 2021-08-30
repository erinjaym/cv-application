import React, { useState } from 'react';

const General = (props) => {

    const [first, setFirstName] = useState (props.first);
    const [last, setLastName] = useState(props.last);
    const [phone, setPhone] = useState (props.phone);
    const [email, setEmail] = useState (props.email);
    const [intro, setIntro] = useState (props.intro);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function handleFirstNameChange (e){
        setFirstName (e.target.value) 
    }

    function handleLastNameChange (e){
        setLastName (e.target.value) 
    }

    function handlePhoneChange (e){
        setPhone (e.target.value) 
    }

    function handleIntroChange (e){
        setIntro (e.target.value) 
    }

    function handleEmailChange (e){
        setEmail (e.target.value) 
    }

    return (
            <div id="general" className="main">
            <h1><center>Personal Information</center></h1>
            <form id="generalInfo" onSubmit={handleSubmit}> 
                <div id="nameSectionFirst" className="formContent">
                    <label htmlFor="firstName">First name</label>
                    <input 
                    name="first" 
                    type="text" 
                    id="firstName" 
                    maxLength="20" 
                    value={first} 
                    onChange={handleFirstNameChange} 
                    />
                </div>

                <div id="nameSectionLast" className="formContent">
                    <label htmlFor="lastName">Last name</label>
                    <input 
                    name="last" 
                    type="text" 
                    id="lastName" 
                    value={last} 
                    onChange={handleLastNameChange}
                    maxLength="20"
                     />
                </div>

                <div id="phone-number" className="formContent">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    name="phone" 
                    type="text" 
                    id="phone" 
                    maxLength="11" 
                    minLength="10" 
                    value={phone} 
                    onChange={handlePhoneChange}
                    />
                </div>
            
                <div id="emailSection" className="formContent">
                    <label htmlFor="email">Email</label>
                    <input 
                    name="email" 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={handleEmailChange}
                    />
                </div>

                <div id="aboutSection" className="formContent">
                    <label htmlFor="about">Self Intro</label>
                    <textarea 
                    name="intro" 
                    id="about" 
                    rows="6" 
                    columns="20"
                    value={intro} 
                    onChange={handleIntroChange}
                    />
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit" onClick={() => props.handleData({first, last, phone, email, intro})}>
                        Save
                    </button> 
                </div>
            </form>
            </div>
    );
}

export default General;