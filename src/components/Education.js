import React from 'react';

class Education extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }); 
    }

        handleSubmit(event) {
            event.preventDefault();
        }
        

    render(){

    return (
            <div id="education-main" className="main">
            <h1><center>Education</center></h1>
            <form id="educationlInfoForm" onSubmit={this.handleSubmit}> 
                <div id="school-name" className="formContent">
                    <label for="school">
                        School Name
                    </label>
                    <input 
                    name="school"
                    type="text" 
                    id="school" 
                    placeholder="Metro State University"
                    maxlength="50"
                    value={this.state.school}
                    onChange={this.handleInputChange}
                    />
                </div>

                <div id="datesSection" className="formContent">
                    <label for="gradDate">
                        Date of Graduation
                    </label>
                    <input
                    name="gradDate" 
                    type="date" 
                    id="gradDate"
                    value={this.state.gradDate}
                    onChange={this.handleInputChange}
                    />
                </div>

                <div id="majorSection" className="formContent">
                    <label for="major">
                        Major
                    </label>
                    <input 
                    name="major"
                    type="text" 
                    id="major" 
                    placeholder="Computer Science" 
                    maxlength="30"
                    value={this.state.major}
                    onChange={this.handleInputChange}
                    />
                </div>
            
                <div id="minorSection" className="formContent">
                    <label for="minor">
                        Minor
                    </label>
                    <input 
                    name="minor"
                    type="text" 
                    id="minor" 
                    placeholder="Japanese" 
                    maxlength="30"
                    value={this.state.minor}
                    onChange={this.handleInputChange}
                    />
                </div>
                
                <div id="gpa-section" className="formContent">
                    <label for="gpa">
                        GPA:
                    </label>
                    <input
                    name="gpa"
                    type="text"
                    id="gpa"
                    placeholder="3.9"
                    maxlength="4"
                    value={this.state.gpa}
                    onChange={this.handleInputChange}
                    />
                    </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit" onClick={() => this.props.handleData(this.state)}>Save</button> 
                </div>
            </form>
            </div>
    );
}
}

export default Education;