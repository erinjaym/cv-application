import React from 'react';

class General extends React.Component{
    constructor(props){
    super (props);

    this.state = {
        first: '',
        last: '',
        age: '',
        phone: '',
        email: '',
        intro: '',
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

    dataCheck(){
        console.log('doing stuffs');
        if (this.props.data.first != 'Billy'){
            return console.log('there is data to use');
        } 
        else{
            return console.log('there is no data to use');
        }
    }

    render(){

    return (

            <div id="general" className="main">
            <h1><center>Personal Information</center></h1>
            <form id="generalInfo" onSubmit={this.handleSubmit}> 
                <div id="nameSectionFirst" className="formContent">
                    <label for="firstName">First name</label>
                    <input 
                    name="first" 
                    type="text" 
                    placeholder="First Name"
                    id="firstName" 
                    maxlength="20" 
                    minlength="2" 
                    value={this.state.first} 
                    onChange={this.handleInputChange} 
                    />
                </div>

                <div id="nameSectionLast" className="formContent">
                    <label for="lastName">Last name</label>
                    <input 
                    name="last" 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    value={this.state.last} 
                    onChange={this.handleInputChange}
                     maxlength="20" minlength="1"
                     />
                </div>

                <div id="dobSection" className="formContent">
                    <label for="dob">Date of birth</label>
                    <input 
                    name="age" 
                    type="date" 
                    id="dob" 
                    value={this.state.age} 
                    onChange={this.handleInputChange}
                    />
                </div>

                <div id="phone-number" className="formContent">
                    <label for="phone">Phone Number</label>
                    <input 
                    name="phone" 
                    type="text" 
                    id="phone" 
                    placeholder="1234567890" 
                    maxlength="11" 
                    minlength="10" 
                    value={this.state.phone} 
                    onChange={this.handleInputChange}
                    />
                </div>
            
                <div id="emailSection" className="formContent">
                    <label for="email">Email</label>
                    <input 
                    name="email" 
                    type="email" 
                    id="email" 
                    placeholder="bojangles@bojangles.com" 
                    value={this.state.email} 
                    onChange={this.handleInputChange}
                    />
                </div>

                <div id="aboutSection" className="formContent">
                    <label for="about">Self Intro</label>
                    <textarea 
                    name="intro" 
                    placeholder="state your personal objective" 
                    id="about" 
                    rows="6" 
                    columns="20"
                    value={this.state.intro} 
                    onChange={this.handleInputChange}
                    />
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit" onClick={() => this.storeInput()}>
                        Save
                    </button> 
                </div>

                
            </form>
            </div>
    );
}
}

export default General;