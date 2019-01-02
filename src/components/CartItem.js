import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'

class CartItem extends Component {
  _onClick = (id) => {
    this.props.removeFromCart(id)
  }

  render() {
    
    return (
      <div style={{marginBottom: "20px"}}>
        <Row>
          <Col>
            {this.props.camera.name}
          </Col>
          <Col>
            <Button onClick={() => this._onClick(this.props.camera.id)} >Remove From Cart</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CartItem