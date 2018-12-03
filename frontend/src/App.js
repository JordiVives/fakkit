import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import LinkList from './components/LinkList';
import NewLink from './components/NewLink'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact
            component={LinkList} />
          <Route path="/new" exact
            component={NewLink} />
        </div>
      </Router>

    );
  }
}

export default App;
