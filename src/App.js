import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { Switch, Route } from 'react-router-dom'
import ShopContainer from './containers/ShopContainer';
import CheckoutContainer from './containers/CheckoutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <Switch>
          <Route exact path="/" component={ShopContainer}/>
          <Route path="/checkout" component={CheckoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
