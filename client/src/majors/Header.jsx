import React, { Component } from 'react';

class Header extends Component {
    state = {}

    render() { 
        return (
            <div className={ `header ${this.props.user? '' : 'hide'}` }>
                <p>Header</p>
            </div>
         );
    }
}
 
export default Header;