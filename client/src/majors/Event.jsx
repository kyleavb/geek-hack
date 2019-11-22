import React, { Component } from 'react';
import UserIcons from '../minors/UserIcons';
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
            let attendies = <UserIcons count={ this.state.event.attendies }/>
            return (
                <div className="event">
                    <div className="event-map"></div>
                    <div className="event-detail">
                        <div className="reg-event-item">
                            <div>
                                <img src="https://placeimg.com/150/100/people"></img>
                            </div>
                            <div>
                                <h3>{this.state.event.title}</h3>
                                <p>{this.state.event.freq}</p>
                            </div>
                        </div>
                        <div>
                            <p>{this.state.event.desc}</p>
                        </div>
                        <div className="rsvp">
                            <select>
                                <option value="interested">Interesrted</option>
                                <option value="audi">Going</option>
                            </select>
                            <div className="rsvp-img">
                                <img src="https://img.icons8.com/metro/24/000000/star.png"></img>
                                <img src="https://img.icons8.com/ios/24/000000/more.png"></img>
                            </div>
                        </div>
                        <div className="specific-details">
                            <div className="specifics">
                                <img src="https://img.icons8.com/android/24/000000/clock.png"></img>
                                <div>
                                    <h4>{this.state.event.repeat}</h4>
                                    <p>{this.state.event.time}</p>
                                </div>
                            </div>
                            <div className="specifics">
                                <img src="https://img.icons8.com/ios/24/000000/marker.png"></img>
                                <div>
                                    <h4>{this.state.event.loc}</h4>
                                    <p>{this.state.event.address}</p>
                                </div>
                            </div>
                            <div className="specifics">
                                <img src="https://img.icons8.com/ios/24/000000/lol.png"></img>
                                <div>
                                    <h4>{this.state.event.host}</h4>
                                </div>
                            </div>
                            <div>
                                <h4>{`${this.state.event.attendies} people are going`}</h4>
                                {attendies}
                            </div>
                        </div>
                    </div>
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