import React, { Component } from 'react'
import { Button } from 'reactstrap'

class CartItem extends Component {
  _onClick = (id) => {
    this.props.removeFromCart(id)
  }

  render() {
    
    return (
      <>
        {this.props.camera.name}
        <Button onClick={() => this._onClick(this.props.camera.id)} >Remove From Cart</Button>
      </>
    )
  }
}

export default CartItem