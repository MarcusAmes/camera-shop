import React, { Component } from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'
import CameraListContainer from '../containers/CameraListContainer';

class Shop extends Component {
  componentDidMount() {
    this.props.getCameras()
  }

  render(){
    return (
      <>
        <SearchBarContainer />
        <CameraListContainer />
      </>
    )
  }
}

export default Shop