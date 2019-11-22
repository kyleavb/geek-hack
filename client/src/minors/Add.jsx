import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAdded: false
         }
    }
    toggleAdd = () => {
        if(!this.state.isAdded){
            this.setState({
                isAdded: true
            })
        } else{
            this.setState({
                isAdded: false
            })
        }
    }
    render() { 
        var add;
        if(!this.state.isAdded){
            add = '+'
        } else{
            add = '✓'
        }
        return ( 
            <span onClick={this.toggleAdd} className='signUpRowClick'>{add}</span>
         );
    }
}
 
export default Add;