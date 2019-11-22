import React, { Component } from 'react';
import UserIcons from './UserIcons';
class FeedEvent extends Component {
    state = {
        eventInfo : null
    }

    componentDidMount(){
        if(this.props.event){
            this.setState( {eventInfo: this.props.event} );
        }
    }
    render(){
        let attendies = <UserIcons count={ this.props.event.attendies } arrow={true} />
        return(
            <a href={`/${this.props.user}/event/${this.props.event.id}`}>
                <div className="reg-event-item">
                    <div>
                        <img src="https://placeimg.com/150/100/people"></img>
                    </div>
                    <div>
                        <p className="tilDate">{this.props.event.date}</p>
                        <h4>{this.props.event.title}</h4>
                        <p>{this.props.event.loc}</p>
                        {/* {attendies} */}
                    </div>
                </div>
            </a>
        )
    }
}
export default FeedEvent;