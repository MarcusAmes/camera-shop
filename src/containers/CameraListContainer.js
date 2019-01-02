import CameraList from '../components/CameraList'
import { connect } from 'react-redux'

const mapStateToProps = ({cameras}) => {
  return{
    cameras: cameras.cameras
  }
}

export default connect(mapStateToProps)(CameraList)