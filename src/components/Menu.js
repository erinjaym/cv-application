import React from 'react';

function Menu (props){

    return (
        <div id="submit-screen" className="main">
            <div id="options-menu" className="options-menu">
                <h1 font-color="red">Data Saved!</h1>
                <button id="edit" className="edit-button" onClick={() => props.goToEducation()}>
                    EDIT Education 
                </button>
                <button id="edit" className="edit-button" onClick={() => props.goToWork()}>
                    EDIT Work History
                </button>
                <button id="edit" className="edit-button" onClick={() => props.goToGeneral()}>
                    EDIT Personal Information
                </button>
            </div>
        </div>
    );
}

export default Menu; 