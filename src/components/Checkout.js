import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer'

class Checkout extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <CartContainer checkout={true} />
      </div>
    )
  }
}

export default Checkout