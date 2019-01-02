import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Camera extends Component {
  render() {
    
    return (
      <Row>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle> {this.props.camera.name} </CardTitle>
            </CardBody>
            <CardImg width="100px" src={this.props.camera.picture} alt="Card image cap" />
            <CardBody>
              <CardSubtitle>${this.props.camera.price}</CardSubtitle>
              <Button>Add To Cart</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Camera