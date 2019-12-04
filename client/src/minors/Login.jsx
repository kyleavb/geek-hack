import React from 'react';

const Login = ( props ) => {
    let disp = props.fail ? '' : 'hide';
    return(
        <div className="intro">
            <div className={`fail ${disp}`}>
                <p>Please Try again</p>
            </div>
            <form className='loginForm' onSubmit={ props.submit }>
                <div>
                    <input type="text" name="login" placeholder="E-mail" value={ props.login } onChange= { props.change }></input>             
                </div>
                <div>
                    <input type="password" name="pass" placeholder="Password" data='pass' value={ props.pass } onChange={ props.change }></input>
                </div>
            </form>
            <div className="button" onClick={ props.submit }>
                <h4>Submit</h4>
            </div>
            <div className="button" onClick={ props.option }>
                <h4>Cancel</h4>
            </div>
        </div>
    )
};

export default Login;