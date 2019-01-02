import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from 'reactstrap';
import ReactStars from 'react-stars'

class Camera extends Component {
  _onClick = (id) => {
    this.props.addToCart(id)
  }

  render() {
    
    return (
      <Card style={{marginTop: "20px"}}>
        <CardTitle style={{marginBottom: "0px", textAlign: "center"}}> <h1> {this.props.camera.name} </h1> </CardTitle>
        {this.props.camera.onSale && <Badge style={{fontSize: "1.4rem"}} color="success">Sale</Badge>}
        {this.props.camera.inCart && <Badge style={{fontSize: "1.4rem"}} color="warning">In Cart</Badge>}
        <CardBody>
          <img width="65%" src={this.props.camera.picture} alt="Card cap" />
          <div>Rating: <ReactStars count={this.props.camera.rating} size={30} edit={false} /> </div>
          <CardSubtitle>${this.props.camera.price}</CardSubtitle>
          {!this.props.camera.inCart && <Button onClick={() => this._onClick(this.props.camera.id)} >Add To Cart</Button>}
        </CardBody>
      </Card>
    )
  }
}

export default Camera