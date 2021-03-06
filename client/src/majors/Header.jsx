import React, { Component } from 'react';
import persona from '../assets/persona.svg'

class Header extends Component {
    
    render() { 
        return (
            <div className={ `header ${this.props.user? '' : 'hide'}` }>
                <div className="profile center button" >
                    <a href={`/profile/${this.props.user}`}>
                        <svg width="40" height="40">       
                            <image href={persona} width="40" height="40"/>    
                        </svg>
                    </a>
                </div>
                <div className="useBar">
                    <div className="center button">
                        <a href="">
                            <img src="https://img.icons8.com/ios/24/000000/bell.png"></img>
                        </a>
                    </div>
                    <div className="center button">
                        <a href="">
                            <img src="https://img.icons8.com/ios/24/000000/sms.png"></img>
                        </a>
                    </div>
                    <div className="center button">
                        <a href="">
                            <img src="https://img.icons8.com/ios-glyphs/24/000000/search.png"></img>
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;