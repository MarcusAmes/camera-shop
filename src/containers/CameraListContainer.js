import CameraList from '../components/CameraList'
import { connect } from 'react-redux'

const mapStateToProps = ({cameras}) => {
  return{
    cameras: cameras.cameras,
    search: cameras.search
  }
}

export default connect(mapStateToProps)(CameraList)