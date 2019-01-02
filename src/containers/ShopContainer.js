import Shop from '../components/Shop'
import { connect } from 'react-redux'
import { getCameras } from '../actions/cameraAction';

const mapDispatchToProps = dispatch => {
  return {
    getCameras: () => {
      dispatch (
        getCameras()
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(Shop)