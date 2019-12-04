import React, { Component } from 'react';
import axios from 'axios';
import Intro from '../minors/Intro';
import Login from '../minors/Login';

class Home extends Component {
    state = {
        login: '',
        pass: '',
        option : 'intro',
        fail: false
    }

    handleSubmit= (e) => {
        e.preventDefault();
        axios.post( '/auth', {
            login: this.state.login,
            pass: this.state.pass   
        }).then( res => {
            if( res.data ){
                console.log(res.data)
                // this.props.login(res.data)
                // this.props.history.push(`/${res.data}`)
            }else{
                this.setState( {fail: true} );
                setTimeout(() => {
                    this.setState( {fail: false} );
                }, 2000);
            }
        })
    }

    handleChange = (e) => {
        this.setState( {[e.target.name]: e.target.value })
    }

   handleOption = (e) => {
       let dest = e.target.getAttribute('loc') || null;
       if( dest === 'login' ){
           this.setState( {option: e.target.getAttribute('loc')} )
       }else if( dest === 'signup' ){
           this.props.history.push('/signup')
       }else{
           this.setState( {option: 'intro'});
       }
   }

    render() {
        let displayOption = this.state.option === 'intro' ? <Intro handle={this.handleOption} />: <Login {...this.props} submit={this.handleSubmit} login={this.state.login} pass={this.state.pass} change={this.handleChange} option={this.handleOption} fail={this.state.fail}/>
        return ( 
            <div className="landing-page">
                <div className='logoContainer'>
                    <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="94" cy="94" r="94" fill="white" />
                        <ellipse cx="94" cy="76.3608" rx="33.1823" ry="33.3608" fill="url(#paint0_linear)" />
                        <ellipse cx="38.9392" cy="126.585" rx="5.10497" ry="5.13244" fill="url(#paint1_linear)" />
                        <ellipse cx="93.6354" cy="139.05" rx="5.10497" ry="5.13244" fill="url(#paint2_linear)" />
                        <ellipse cx="145.414" cy="126.585" rx="5.10497" ry="5.13244" fill="url(#paint3_linear)" />
                        <line x1="93.1768" y1="103.856" x2="93.1768" y2="136.117" stroke="#F7971E" strokeWidth="2" />
                        <line y1="-1" x2="32.1748" y2="-1" transform="matrix(0.705207 -0.709001 0.705207 0.709001 41.8563 126.668)" stroke="#F7971E" strokeWidth="2" />
                        <line y1="-1" x2="32.1748" y2="-1" transform="matrix(0.705207 0.709001 -0.705207 0.709001 119.89 103.856)" stroke="#F7971E" strokeWidth="2" />
                        <ellipse cx="94" cy="92.858" rx="66" ry="16.8637" fill="url(#paint4_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="60.8177" y1="76.3608" x2="127.182" y2="76.3608" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7971E" />
                                <stop offset="1" stopColor="#FFD200" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="33.8342" y1="126.585" x2="44.0442" y2="126.585" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7971E" />
                                <stop offset="1" stopColor="#FFD200" />
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="88.5304" y1="139.05" x2="98.7403" y2="139.05" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7971E" />
                                <stop offset="1" stopColor="#FFD200" />
                            </linearGradient>
                            <linearGradient id="paint3_linear" x1="140.309" y1="126.585" x2="150.519" y2="126.585" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7971E" />
                                <stop offset="1" stopColor="#FFD200" />
                            </linearGradient>
                            <linearGradient id="paint4_linear" x1="28" y1="92.858" x2="160" y2="92.858" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7971E" />
                                <stop offset="1" stopColor="#FFD200" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h1 className='App white'>G33k Out</h1>
                <p>
                    Weataher you're into technology, literature, or popular culture, meet with other impassioned individuals to geek out!
                </p>
                {displayOption}
            </div>
         );
    }
}
 
export default Home;

