import React, { Component } from 'react'
import CameraContainer from '../containers/CameraContainer';

class CameraList extends Component {
  render() {
    const camerasList = this.props.cameras.filter(camera => camera.name.toLowerCase().includes(this.props.search.toLowerCase()))
    const camerasListComponents = camerasList.map(camera => <CameraContainer key={camera.id} camera={ camera } />) 
    return (
      <>
        {this.props.loading ? <p>Loading...</p> : camerasListComponents}
      </>
    )
  }
}

export default CameraList