import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { Switch, Route } from 'react-router-dom'
import Shop from './components/Shop';
import CheckoutContainer from './containers/CheckoutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route path="/checkout" component={CheckoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default (App);
