import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from 'reactstrap';
import CartItemContainer from '../containers/CartItemContainer';
import { Link } from 'react-router-dom'

class Cart extends Component {
  componentDidMount() {
    this.props.getCameras()
  }

  render() {
    const subtotal = (Math.round(100 * this.props.cameras.reduce((acc, camera) => acc + camera.price, 0)) / 100).toFixed(2)
    const tax = (Math.round(100 * Number(subtotal) * .086) / 100).toFixed(2)
    const total = (Math.round(100 * Number(subtotal) + Number(tax)) / 100).toFixed(2)
    const cartList = this.props.cameras.map(camera => <CartItemContainer key={camera.id} camera={camera} />)
    return (
      <Card body inverse color="warning">
        <CardBody>
          <CardTitle style={{textAlign: "center"}}> Your Cart: </CardTitle>
          <Container>
            {this.props.cameras.length === 0 ? <p> Empty </p> : cartList }
          </Container>
          <div style={{textAlign: "center"}}>
            <CardSubtitle >Subtotal: ${subtotal} </CardSubtitle>
            <CardSubtitle>Tax: ${tax} </CardSubtitle>
            <CardSubtitle><h6> Total: ${total} </h6> </CardSubtitle>
            {!this.props.checkout && <Button><Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}> Checkout </Link></Button>}
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Cart