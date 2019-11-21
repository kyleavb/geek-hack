import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './majors/Home'
import Feed from './majors/Feed'
import EventList from './majors/EventList'
import SignUp from './majors/SignUp'
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('/data').then( (res) => {
      console.log(res)
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/:guid' component={Feed} />
          <Route exact path='/:guid/events' component={EventList} />
        </Switch>
      </Router>
    );
  }
}

export default App;