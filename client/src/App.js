import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './majors/Home'
import Feed from './majors/Feed'
import EventList from './majors/EventList'
import SignUp from './majors/SignUp'
import Header from './majors/Header'
import Footer from './majors/Footer'
import './App.css';

class App extends Component {
  state = {
    user: true
  }

  login = (guid) => {
    if( guid ){
      this.setState({user: guid})
    } 
  }

  render() {
    console.log( this.state.user)
    return (
      <Router>
        <Header user={ this.state.user }/>
        <div className="content">
          <Switch>
            <Route exact path='/' render={ (props) => <Home {...props} login={this.login} /> } />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/:guid' component={Feed} />
            <Route exact path='/:guid/events' component={EventList} />
          </Switch>
        </div>
        <Footer user={ this.state.user } />
      </Router>
    );
  }
}

export default App;