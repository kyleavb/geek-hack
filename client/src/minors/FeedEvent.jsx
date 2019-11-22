import React, { Component } from 'react';

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
        return(
            <a href={`/${this.props.user}/event/${this.props.event.id}`}>
                <div className="reg-event-item">
                    <div>
                        <img src="https://placeimg.com/150/100/people"></img>
                    </div>
                    <div>
                        <p className="tilDate">{this.props.event.date}</p>
                        <h3>{this.props.event.title}</h3>
                        <p>{this.props.event.loc}</p>
                    </div>
                </div>
            </a>
        )
    }
}
export default FeedEvent;