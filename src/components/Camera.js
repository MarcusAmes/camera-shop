import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Camera extends Component {
  _onClick = (id) => {

  }

  render() {
    
    return (
      <Card>
        <CardBody>
          <CardTitle> <h1> {this.props.camera.name} </h1> </CardTitle>
        </CardBody>
        <CardImg width="100px" src={this.props.camera.picture} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>${this.props.camera.price}</CardSubtitle>
          <Button onClick={() => this._onClick(this.props.camera.id)} >Add To Cart</Button>
        </CardBody>
      </Card>
    )
  }
}

export default Camera