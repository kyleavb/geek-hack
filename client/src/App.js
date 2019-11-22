import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './majors/Home'
import Feed from './majors/Feed'
import EventList from './majors/EventList'
import Event from './majors/Event';
import SignUp from './majors/SignUp'
import Header from './majors/Header'
import Footer from './majors/Footer'
import ls from 'local-storage'
import './App.css';

class App extends Component {
  state = {
    user: ls.get( 'user' ) || null
  }

  login = (guid) => {
    if( guid ){
      this.setState({user: guid})
      ls.set('user', guid);
    } 
  }

  render() {
    var contentClass;
    if(this.state.user){
      contentClass = 'content'
    } else{
      contentClass=''
    }
    return (
      <div className="app">
        <Header user={ this.state.user }/>
        <Router>
          <div className={contentClass}>
            <Switch>
              <Route exact path='/' render={ (props) => <Home {...props} login={this.login} /> } />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/:guid' render={ (props) => <Feed {...props} user={this.state.user} /> }/>
              <Route exact path='/:guid/events' render={ (props) => <EventList {...props} user={this.state.user} /> }/>
              <Route exact path='/:guid/event/:eguid' render={ (props) => <Event {...props} user={this.state.user} /> }/>
            </Switch>
          </div>
        </Router>
        <Footer user={ this.state.user } />
      </div>
    );
  }
}

export default App;