import React, { Component } from 'react';
import Add from '../minors/Add'

class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div className='signUpRow whiteBackground'>
                    <img src={this.props.category.img} />
                    <div>
                    <h1>{this.props.category.title}</h1>
                    <Add />
                    </div>
                </div>
                );
    }
}
 
export default Interests;