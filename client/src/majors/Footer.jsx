import React, { Component } from 'react';

class Footer extends Component {
    state = {}

    render() { 
        return (
            <div className={ `footer ${this.props.user? '' : 'hide'}` }>
                <p>Footer</p>
            </div>
         );
    }
}
 
export default Footer;