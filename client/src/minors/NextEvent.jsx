import React, { Component } from 'react';
import UserIcons from './UserIcons';
class NextEvent extends Component {
    render(){
        return(
            <div className="event-item">
                <h3 className="tilNext"><strong>{`${this.props.event.till}`}</strong> {`until your next event`}</h3>
                <img src="http://haverfordwesthornets.com/wp-content/uploads/2017/07/Google-Map-Placeholder.png"></img>
                <p className="tilDate">{this.props.event.date}</p>
                <h3>{this.props.event.title}</h3>
                <p>{this.props.event.loc}</p>
                <UserIcons count={ this.props.event.attendies } arrow={false}/>
            </div>
        )
    }
}
export default NextEvent;