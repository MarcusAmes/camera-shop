import React, { Component } from 'react'
import Camera from './Camera';

class CameraList extends Component {
  render() {
    let camerasList = this.props.cameras
    if (this.props.search.length) {
      camerasList = camerasList.filter(camera => camera.name.toLowerCase().includes(this.props.search.toLowerCase()) && !camera.inCart)
    }
    const camerasListComponents = camerasList.map(camera => <Camera key={camera.id} camera={ camera } />) 
    return (
      <>
        {camerasListComponents}
      </>
    )
  }
}

export default CameraList