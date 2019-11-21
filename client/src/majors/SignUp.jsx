import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        displayInfo: true,
        firstName: '',
        lastName: '',
        userName: '',
        location: '',
        email: '',
        gender: '',
        password: ''
    }
    displayInfoToggle = () => {
        this.setState({
            displayInfo: false,
            
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() { 
        var content;
        if(this.state.displayInfo){
            var content = (
                <div>
                    <form>
                        First Name:
                        <br />
                        <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />
                        <br />
                        Last Name: 
                        <br />
                        <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
                        <br />
                        Username:
                        <br /> 
                        <input type='text' name='userName' onChange={this.handleChange} value={this.state.userName} />
                        <br />
                        Location:
                        <br /> 
                        <input type='text' name='location' onChange={this.handleChange} value={this.state.location} />
                        <br />
                        Email: 
                        <br />
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
                        <br />
                        Gender: 
                        <br />
                        <input type='text' name="gender" onChange={this.handleChange} value={this.state.gender} />
                        <br />
                        Password:
                        <br /> 
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
                        <br />
                        <button onClick={this.displayInfoToggle}>Sign Up!</button>
                    </form>
                </div>
            )
        } else {
            var content = (
                <div>
                    <div>
                        <h1>Dungeons and Dragons</h1>
                    </div> 
                </div>
            )
        }
        return ( 
            <div>
            {content}
            </div>
        );
    }
}
 
export default SignUp;