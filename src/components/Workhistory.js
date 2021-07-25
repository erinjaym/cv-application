import React from 'react';

class WorkHistory extends React.Component {
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

    storeInput() {
        this.props.handleData(this.state);
    }

    
render(){

    return (
        <div 
        id="workHistoryMain" 
        className="main">
            <h1><center>Work History</center></h1>
                <form 
                id="workHistoryForm"
                onSubmit={this.handleSubmit}> 
                    <div id="employer-name" className="formContent">
                        <label for="employer-name">
                            Employer Name
                        </label>
                        <input 
                        name="company"
                        type="text" 
                        id="employer-name" 
                        placeholder="Bobs Used Cars" 
                        maxlength="20"
                        value={this.state.employer} 
                        onChange={this.handleInputChange}
                        />
                    </div>

                    <div id="datesSection" className="formContent">
                    Dates of Employment: <br/>
                        <label for="startDate" >
                        From
                        </label>
                        <input 
                        name="startDate"
                        type="date" 
                        className="employment-dates" 
                        id="startDate" 
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                        />
                        <label for="endDate">
                            To
                        </label>
                        <input 
                        name="endDate"
                        type="date" 
                        className="employment-dates" 
                        id="endDate"
                        value={this.state.endDate}
                        onChange={this.handleInputChange} 
                        />
                    </div><br/>

                <div id="titleSection" className="formContent">
                    <label for="jobTitle">
                        Title
                    </label>
                    <input 
                    name="jobTitle"
                    type="text" 
                    id="jobTitle" 
                    placeholder="Commander" 
                    maxlength="30"
                    value={this.state.jobTitle}
                    onChange={this.handleInputChange} 
                    />
                </div>
            
                <div id="jobDescriptionSection" className="formContent">
                    <label for="jobDescription">
                        Job Responsibilities
                    </label>
                    <textarea 
                    name="jobSkills"
                    id="jobDescription" 
                    placeholder="Doing all the things" 
                    rows="6" columns="20"
                    value={this.state.jobSkills}
                    onChange={this.handleInputChange} 
                    />
                </div><br/><br/>
                

                <div id="add" className="formContent">
                    <button className="save-button" type="submit" onClick={() => this.props.handleData(this.state)}>Save</button> 
                </div>
            </form>
        </div>
    );

    }
}


export default WorkHistory;