import React from 'react';

const Submit = (props) => {
    const { Submitted } = props

    return (
        <div id="submit-screen" className="main">
            <div id="options-menu" className="options-menu">
                <button id="edit" className="edit-button">
                    EDIT Education 
                </button>
                <button id="edit" className="edit-button">
                    EDIT Work History
                </button>
                <button id="edit" className="edit-button">
                    EDIT Personal Information
                </button>
                <button id="preview-cv" className="preview-cv">
                    Look at CV
                </button>
            </div>
        </div>
    );
}

export default Submit; 