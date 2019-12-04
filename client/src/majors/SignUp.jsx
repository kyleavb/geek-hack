import React, { Component } from 'react';
// import category_data from '../data/Categories.js'
// import Interests from '../minors/Interests'
import axios from 'axios';
import { Link } from "react-router-dom";

class SignUp extends Component {
    state = { 
        progress: 0,
    }
    
    handleChange = ( e ) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    moveProgress = ( dir ) => {
        console.log('check progress and change content')
    }

    goBack = (e) => { 
        this.props.history.goBack()
    }
    render() { 
        // var categories = this.state.categories.map(category => (
        //     <Interests category={category} />
        //     ))
        
        return ( 
            <div className="signup">
                <div className="button" onClick={ this.goBack }> Go Back</div>
            </div>
        );
    }
}

export default SignUp;