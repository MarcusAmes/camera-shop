import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import CartItemContainer from '../containers/CartItemContainer';
import { Link } from 'react-router-dom'

class Cart extends Component {
  render() {
    const subtotal = this.props.cameras.reduce((acc, camera) => acc + camera.price, 0)
    const tax = (subtotal * .1).toFixed(2)
    const total = (subtotal + Number(tax)).toFixed(2)
    const cartList = this.props.cameras.map(camera => <CartItemContainer key={camera.id} camera={camera} />)
    return (
      <Card body inverse color="warning">
        <CardBody>
          <CardTitle> Your Cart: </CardTitle>
          {this.props.cameras.length === 0 ? <p> Empty </p> : cartList }

          <CardSubtitle>Subtotal: ${subtotal} </CardSubtitle>
          <CardSubtitle>Tax: ${tax} </CardSubtitle>
          <CardSubtitle>Total: ${total} </CardSubtitle>
          <Button><Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}> Checkout </Link></Button>
        </CardBody>
      </Card>
    )
  }
}

export default Cart