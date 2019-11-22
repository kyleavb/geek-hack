import React, { Component } from 'react';
import category_data from '../data/Categories.js'
import Interests from '../minors/Interests'
import axios from 'axios';
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

    handleSubmit= (e) => {
        e.preventDefault();
        axios.post( '/auth', {
            login: "w@w.com",
            pass: "w"   
        }).then( res => {
            if( res.data ){
                this.props.login(res.data)
                this.props.history.push(`/${res.data}`)
            }else{
                this.setState( {fail: true} )
                setTimeout(() => {
                    this.setState( {fail: false} )
                }, 2000)
            }
        })
    }

    render() { 
        var categories = this.state.categories.map(category => (
            <Interests category={category} />
            ))
        var content;
        if(this.state.displayInfo){
            var content = (
                <div className='signUpMargin'>
                <div className='signUpFormInfo whiteBackground'>
                    <h1 className='App'>Basic Info</h1>
                    <form >
                        <p>My Name Is:</p>
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                        <br />
                        <p>Username:</p>
                        <input type='text' name='userName' onChange={this.handleChange} value={this.state.userName} />
                        <br />
                        <p>Location:</p>
                        <input type='text' name='location' onChange={this.handleChange} value={this.state.location} />
                        <br />
                        <p>Email: </p>
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
                        <br />
                        <p>Password:</p> 
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
                        <br />
                        <br />
                        <button className='signUpButton' onClick={this.displayInfoToggle}>Sign Up!</button>
                    </form>
                </div>
                </div>
            )
        } else {
            var content = (
                <div className='signUp'>
                    <nav>
                        <Link onClick={this.handleSubmit} className='finish' to='/9101'>Finish </Link>
                    </nav>
                    <div className='white'>
                    <h2 className='signUpTitle'>Tell us what you are interested in Space Cowboy.</h2>
                    <hr />
                    <h3 className='signUpSubTitle'>This will help us find the best events for you!</h3>
                    </div>
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