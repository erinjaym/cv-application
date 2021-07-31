import React from 'react';

const MainButtons = (props) => {
    return (
        <div id="submit-screen" className="main">
            <div id="options-menu" className="options-menu">
                <button id="preview-cv" className="preview-cv" onClick={() => props.showCv()}>
                    Show / Hide CV
                </button>
                <button id="menu-display" className="edit-button" onClick={() => props.showMenu()}>Toggle Menu</button>
            </div>
        </div>
    );
    }

export default MainButtons; 