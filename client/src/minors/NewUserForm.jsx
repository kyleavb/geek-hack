import React from 'react';

const NewUserForm = ( props ) => {

    return(
        <div>
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
    )
}
export default NewUserForm;

// .signUpFormInfo input{
//     width: 95%;
//     font-size: 2em;
//     border: 2px solid rgba(0, 0, 0, 0.692);
//     border-radius: 15px;
//     margin: 2px 0px;
//   }