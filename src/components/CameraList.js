import React, { Component } from 'react'
import Camera from './Camera';
import { Container} from 'reactstrap'

class CameraList extends Component {
  render() {
    const camerasList = this.props.cameras.map(camera => <Camera key={camera.id} camera={ camera } />) 
    return (
      <Container>
          {camerasList}
      </Container>
    )
  }
}

export default CameraList