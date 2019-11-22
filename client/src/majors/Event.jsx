import React, { Component } from 'react';
import axios from 'axios';

class Event extends Component {
    state = {
        event : null
    }
    componentDidMount(){
        axios.post( '/event', {
            login: this.props.user,
            event: this.props.match.params.eguid
        }).then( res => {
            this.setState({event: res.data});
        })
    }

    checkState = () => {
        if(this.state.event){
            return (
                <div>
                    <h1>{this.state.event.title}</h1>
                </div>
            )
        }else{
            return 'Loading...'
        }
    }

    render(){
        let body = this.checkState();
        
        return(
            <div>
                {body}
            </div>
        )
    }
}
export default Event;