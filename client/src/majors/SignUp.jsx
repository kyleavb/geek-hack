import React, { Component } from 'react';
import category_data from '../data/Categories.js'
import Interests from '../minors/Interests'
import { Link } from "react-router-dom";
class SignUp extends Component {
    state = { 
        displayInfo: true,
        name: '',
        userName: '',
        location: '',
        email: '',
        password: '',
        categories: category_data.data
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
        var categories = this.state.categories.map(category => (
            <Interests category={category} />
            ))
        var content;
        if(this.state.displayInfo){
            var content = (
                <div className=''>
                    <h1 className='App'>Basic Info</h1>
                    <form>
                        My Name Is:
                        <br />
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
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
                <div className='signUp'>
                    <nav>
                    <Link className='finish' to='/9101'>Finish </Link>
                    </nav>
                    <h2 className='signUpTitle'>Tell us what you are interested in Space Cowboy.</h2>
                    <p className='signUpSubTitle'>This will help us find the best events for you!</p>
                    <div className='signUpContainer'>
                        {categories}
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