import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { getCameras } from '../actions/cameraAction'

const mapStateToProps = ({cameras}) => {
  return {
    cameras: cameras.cameras.filter(camera => camera.inCart)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCameras: () => {
      dispatch(
        getCameras()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)