import React, { Component } from 'react';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

class UserIcons extends Component {

    render(){
        const picList = [user1, user2, user3];
        let mapIcons = [];
        for(let i = 0; i < this.props.count; i++){
            let random = Math.floor(Math.random() * 3);  
            mapIcons.push(<img key={i} src={picList[random]}></img>)
        }

        return(
            <div className="attendBar">
                <div className="weirdIcons">
                    {mapIcons}
                </div>
                <img src="https://img.icons8.com/android/24/000000/chevron-right.png"></img>
            </div>
        )
    }
}
export default UserIcons;