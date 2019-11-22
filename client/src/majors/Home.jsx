import React, { Component } from 'react';
import ls from 'local-storage'
import axios from 'axios';

class Home extends Component {
    state = { 
        login: '',
        pass: '',
        fail: false
    }

    componentDidMount(){
        if(ls.get( 'user' )){
            ls.remove('user');
            this.setState( {fail: false});
        }
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
                <div className='logoContainer'>
                <img className='logo' height='100' width='100' src='https://i.imgur.com/Il1df01.jpg' />
                </div>
                <h1 className='App white'>G33K OUT</h1>
                <div className='loginContent whiteBackground'>
                    <div className={ this.state.fail ? 'fail' : 'hide' }>Login attempt Failed</div>
                    <form className='loginForm' onSubmit={ this.handleSubmit }>
                        <label><span>Login:</span> 
                            <input type="text" name="login" placeholder="E-mail" value={ this.state.login } onChange={ this.handleChange }></input>
                        </label>
                        <br />
                        <label><span className=''>Password:</span> 
                            <input type="password" name="pass" placeholder="Password" data='pass' value={ this.state.pass } onChange={ this.handleChange }></input>
                        </label>
                        <br />
                        <button className='signUpButton' type="submit">Submit</button>
                    </form>
                <div>
                    <h2 className='App'>Or, stop being a dork and sign up</h2>
                    <h3><a className="signUpLink" href='/signup'>Create Account</a></h3>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Home;