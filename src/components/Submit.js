import React from 'react';

const Submit = (props) => {
    const { Submitted } = props
// rigt is education ... left is work history from general page or is there a way to link submit to arrows? 
    return (
        <div id="submit-screen" className="main">
            <div id="options-menu" className="options-menu">
                <h1 font-color="red">Data Saved!</h1>
                <button id="edit" className="edit-button">
                    EDIT Education 
                </button>
                <button id="edit" className="edit-button">
                    EDIT Work History
                </button>
                <button id="edit" className="edit-button">
                    EDIT Personal Information
                </button>
            </div>
        </div>
    );
}

export default Submit; 