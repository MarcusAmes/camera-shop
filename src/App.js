import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { Switch, Route } from 'react-router-dom'
import ShopContainer from './containers/ShopContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <Switch>
          <Route path="/" component={ShopContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
