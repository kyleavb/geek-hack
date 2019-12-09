import React from 'react';

const BasicInfo = ( props ) => {
    let errorShow = props.formError ? <p className="formError">Form not filled our correctly. Please review.</p> : '';
    return(
        <div className="userInfo">
            <h3>Basic Info</h3>
            {errorShow}
            <div className="inputSection">
                <h5>My First Name Is</h5>
                <input type="text" name="first" placeholder="James" value={ props.first || '' } onChange={ props.handleChange }></input>             
            </div>
            <div className="inputSection">
                <h5>My Last Name Is</h5>
                <input type="text" name="last" placeholder="Kirk" value={ props.last || '' } onChange={ props.handleChange }></input>             
            </div>
            <div className="inputSection">
                <h5>My Email Is</h5>
                <input type="email" name="email" placeholder="captain@enterprise.com" value={ props.email || '' } onChange={ props.handleChange }></input>             
            </div>
            <div className="inputSection">
                <h5>Password</h5>
                <input type="password" name="password"value={ props.password || '' } onChange={ props.handleChange }></input>             
            </div>
            <div className="inputSection">
                <h5>My Tagline Is</h5>
                <input type="text" name="tagLine" placeholder="Beam me up Scotty" value={ props.tagLine || '' } onChange={ props.handleChange }></input>             
            </div>
            <div className="options">
                <div className="button" onClick={ props.validateInput }>
                    <h4>Continue</h4>
                </div>
                <div className="button" onClick={ props.exit }>
                    <h4>Cancel</h4>
                </div>
                <p className="terms">
                    By Creating an account, you agree to the MeeT G33K <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
                </p>
            </div>
        </div>
    )
}

export default BasicInfo;