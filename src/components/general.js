import React from 'react';

class General extends React.Component{
    constructor(props){
    super (props);

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

        if (this.props.data){
    return (

            <div id="general" className="main">
            <h1><center>Personal Information</center></h1>
            <form id="generalInfo" onSubmit={this.handleSubmit}> 
                <div id="nameSectionFirst" className="formContent">
                    <label for="firstName">First name</label>
                    <input 
                    name="first" 
                    type="text" 
                    placeholder={this.props.data.first} //this works when Data.first exists
                    id="firstName" 
                    maxlength="20" 
                    value={this.props.first} 
                    onChange={this.handleInputChange} 
                    />
                </div>

                <div id="nameSectionLast" className="formContent">
                    <label for="lastName">Last name</label>
                    <input 
                    name="last" 
                    type="text" 
                    id="lastName" 
                    placeholder={this.props.data.last}
                    value={this.state.last} 
                    onChange={this.handleInputChange}
                    maxlength="20"
                     />
                </div>

                <div id="phone-number" className="formContent">
                    <label for="phone">Phone Number</label>
                    <input 
                    name="phone" 
                    type="text" 
                    id="phone" 
                    placeholder={this.props.data.phone}
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
                    placeholder={this.props.data.email} 
                    value={this.state.email} 
                    onChange={this.handleInputChange}
                    />
                </div>

                <div id="aboutSection" className="formContent">
                    <label for="about">Self Intro</label>
                    <textarea 
                    name="intro" 
                    placeholder={this.props.data.intro}
                    id="about" 
                    rows="6" 
                    columns="20"
                    value={this.state.intro} 
                    onChange={this.handleInputChange}
                    />
                </div><br></br>

                <div id="save" className="formContent">
                    <button className="save-button" type="submit" onClick={() => this.props.handleData(this.state)}>
                        Save
                    </button> 
                </div>

                
            </form>
            </div>
    );
        }else {
            return (

                <div id="general" className="main">
                <h1><center>Personal Information</center></h1>
                <form id="generalInfo" onSubmit={this.handleSubmit}> 
                    <div id="nameSectionFirst" className="formContent">
                        <label for="firstName">First name</label>
                        <input 
                        name="first" 
                        type="text" 
                        placeholder="INITIAL LOAD" //this works when Data.first exists
                        id="firstName" 
                        maxlength="20" 
                        value={this.props.first} 
                        onChange={this.handleInputChange} 
                        />
                    </div>
    
                    <div id="nameSectionLast" className="formContent">
                        <label for="lastName">Last name</label>
                        <input 
                        name="last" 
                        type="text" 
                        id="lastName" 
                        placeholder="last name"
                        value={this.state.last} 
                        onChange={this.handleInputChange}
                         maxlength="20"
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
                        <button className="save-button" type="submit" onClick={() => this.props.handleData(this.state)}>
                            Save
                        </button> 
                    </div>
    
                    
                </form>
                </div>
        );


        }
    } // render
}

export default General;