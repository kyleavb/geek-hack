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