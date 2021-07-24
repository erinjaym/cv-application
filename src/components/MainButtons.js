import React from 'react';

class MainButtons extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    return (
        <div id="submit-screen" className="main">
            <div id="options-menu" className="options-menu">
                <button id="preview-cv" className="preview-cv" onClick={() => this.props.showCv()}>
                    Show / Hide CV
                </button>
                <button id="menu-display" className="edit-button" onClick={() => this.props.showMenu()}>Toggle Menu</button>
            </div>
        </div>
    );
    }
}

export default MainButtons; 