import React, { Component } from 'react';
import ls from 'local-storage'
import axios from 'axios';

class Home extends Component {
    state = { 
        login: '',
        pass: '',
        fail: false
    }

    handleChange = (e) => {
        this.setState( {[e.target.name]: e.target.value })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        axios.post( '/auth', {
            login: this.state.login,
            pass: this.state.pass   
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
        
        return ( 
            <div>
                <h1>Geek related Social App</h1>
                <div>
                    <div className={ this.state.fail ? 'fail' : 'hide' }>Login attempt Failed</div>
                    <form id="login" onSubmit={ this.handleSubmit }>
                        <label>Login: 
                            <input type="text" name="login" placeholder="E-mail" value={ this.state.login } onChange={ this.handleChange }></input>
                        </label>
                        <label>Password:
                            <input type="password" name="pass" placeholder="Password" data='pass' value={ this.state.pass } onChange={ this.handleChange }></input>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <h3>Or, stop being a dork and sign up</h3>
                    <a href='/signup'>Create Account</a>
                </div>
            </div>
         );
    }
}
 
export default Home;