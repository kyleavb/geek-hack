import React, { Component } from 'react';
import Add from '../Add'

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
                <h1 className='App'>Choose your Favorites!</h1>
                <div className='signUpContainer'>
                    <div className='signUpRow'>
                        <img src='http://media.wizards.com/2018/dnd/images/XL2018_DnD.png' />
                        <div>
                        <h1>Table Top Games</h1>
                        <h3>Games like D&D, Warhammer, Pathfinder, etc...</h3>
                        <Add />
                        </div>
                    </div> 
                    <div className='signUpRow'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png' />
                        <h1>Star Wars</h1>
                        <Add />
                    </div> 
                    <div className='signUpRow'>
                        <Add />
                    </div> 
                    <div className='signUpRow'>
                        <Add />
                    </div> 
                    <div className='signUpRow'>
                        <h1>Dungeons and Dragons</h1>
                        <Add />
                    </div> 
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