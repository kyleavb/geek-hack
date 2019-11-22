import React, { Component } from 'react';
import FeedEvent from '../minors/FeedEvent'
import axios from 'axios';

class Feed extends Component {
    state = {
        events: ''
    };
    componentDidMount(){
        console.log()
        axios.post( '/feed', {
            login: this.props.user,
        }).then( res => {
            if( res.data ){
                this.setState( {events: res.data} )
            }
        })
    }

    mapEvents = () => {
        return this.state.events.map( (item, i) => (
            <FeedEvent event={item} key={i} />
        ))
    }

    render() {
        let mappedEvents = this.state.events ? this.mapEvents() : 'You Lonley!'
        return ( 
            <div className="feed">
                {mappedEvents}
            </div>
         );
    }
}

export default Feed;