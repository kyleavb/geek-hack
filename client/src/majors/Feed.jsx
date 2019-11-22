import React, { Component } from 'react';
import FeedEvent from '../minors/FeedEvent';
import NextEvent from '../minors/NextEvent';
import axios from 'axios';

class Feed extends Component {
    state = {
        events: ''
    };
    componentDidMount(){
        axios.post( '/feed', {
            login: this.props.user,
        }).then( res => {
            if( res.data ){
                this.setState( {events: res.data} )
            }
        })
    }

    mapEvents = () => {
        return this.state.events.map( (item, i) => {
            if( i === 0){
                return <NextEvent user={this.props.user} event={item} key={i}/>
            }else{
                return <FeedEvent user={this.props.user} event={item} key={i} />
            }
        })
    }

    render() {
        let mappedEvents = this.state.events ? this.mapEvents() : 'You Lonley!'
        return ( 
            <div className="feed">
                <h3>Following</h3>
                {mappedEvents}
            </div>
         );
    }
}

export default Feed;