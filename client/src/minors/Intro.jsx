import React from 'react';

const Intro = (props) => {
    return(
        <div className="intro">
            <div className="button" onClick={ props.handle} loc="login">
                <h3>Login</h3>
            </div>
            <div className="button" onClick={ props.handle} loc="signup">
                <h3>Signup</h3>
            </div>
        </div>
    )
}

export default Intro;
