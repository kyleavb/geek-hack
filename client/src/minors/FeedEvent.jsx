import React, { Component } from 'react';

class FeedEvent extends Component {
    render(){
        console.log(this.props.event)
        return(
            <div className="event-item">
                <h1>{this.props.event.title}</h1>
                <p>{`Loc: ${this.props.event.loc} @: ${this.props.event.date}`}</p>
            </div>
        )
    }
}
export default FeedEvent;