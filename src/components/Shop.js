import React, { Component } from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'
import CameraListContainer from '../containers/CameraListContainer';
import CartContainer from '../containers/CartContainer';
import { Container, Row, Col } from 'reactstrap'

class Shop extends Component {

  render(){
    return (
      <Container style={{marginTop: "20px"}}>
        <Row>
          <Col lg="7" >
            <SearchBarContainer />
            <div style={{height: "80vh", overflow: "auto"}}>
              <CameraListContainer />
            </div>
          </Col>
          <Col lg="5">
            <CartContainer />          
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Shop