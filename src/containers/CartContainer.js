import Cart from '../components/Cart'
import { connect } from 'react-redux'

const mapStateToProps = ({cameras}) => {
  return {
    cameras: cameras.cameras.filter(camera => camera.inCart)
  }
}

export default connect(mapStateToProps)(Cart)