import React, { Component } from 'react';
import BasicInfo from '../minors/Signup-Fields/basicInfo';
import util from '../helpers/validations';
import axios from 'axios';

class SignUp extends Component {
    state = { 
        stage: 0,
        first : null,
        last: null,
        email: null,
        password: null,
        tagLine: null,
        topInterest: [],
        specificInterest: [],
        formError: false
    }
    
    handleChange = ( e ) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateInfo = () => {
        if( this.state.first && this.state.last && util.validateEmail(this.state.email) && util.validatePassword( this.state.password ) ){
            // progresses to next stage of onboarding --- can be removed for testing
                // this.setState({ stage: this.state.stage += 1})

            // for testing, when valid will create a user
            this.props.history.push('/')
        }else{
            this.setState({ formError: true });
            setTimeout( () => {
                this.setState({ formError: false });
            }, 1500)
        }

    }

    goBack = (e) => {
        console.log('goback')
        if( this.state.stage === 0){
            this.props.history.goBack()
        }
        if( this.state.stage > 0){
            this.setState({ stage: this.state.stage -= 1 });
        }
    }

    progress = () => {
        switch( this.state.stage) {
            case 0:
                return <BasicInfo {...this.state} handleChange={ this.handleChange } validateInput={ this.validateInfo } exit={ this.goBack } />
                break;
            case 1:
                return <h1>Hi</h1>
                break;
        }
    }

    render() { 
        let showSignUpForm = this.progress();

        return ( 
            <div className="signup">
                {showSignUpForm}
            </div>
        );
    }
}

export default SignUp;