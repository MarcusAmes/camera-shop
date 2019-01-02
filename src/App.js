import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <Switch>

        </Switch>
      </div>
    );
  }
}

export default App;
