import React, { Component } from 'react';

class Footer extends Component {

    render() { 
        return (
            <div className={ `footer ${this.props.user? '' : 'hide'}` }>
                <div className="center button">
                    <a href={`/${this.props.user}`}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/like.png"></img>
                        <label>Following</label>
                    </a>
                </div>
                <div className="center button">
                    <a href={`/events/${this.props.user}`}>
                        <img src="https://img.icons8.com/android/24/000000/compass.png"></img>
                        <label>Discover</label>                    
                    </a>
                </div>
                <div className="center button">
                    <a href={`/browse/${this.props.user}`}>
                        <img src="https://img.icons8.com/android/24/000000/right-squared.png"></img>
                        <label>Browse</label>
                    </a>
                </div>
            </div>
         );
    }
}
 
export default Footer;