import React, { Component } from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'
import CameraListContainer from '../containers/CameraListContainer';
import CartContainer from '../containers/CartContainer';
import { Container, Row, Col } from 'reactstrap'

class Shop extends Component {
  componentDidMount() {
    this.props.getCameras()
  }

  render(){
    return (
      <Container>
        <Row>
          <Col lg="8">
            <SearchBarContainer />
            <CameraListContainer />
          </Col>
          <Col lg="4">
            <CartContainer />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Shop