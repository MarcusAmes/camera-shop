import Checkout from '../components/Checkout'
import { connect } from 'react-redux'

const mapStateToProps = ({cameras}) => {
  return {
    cameras: cameras.cameras.filter(camera => camera.inCart)
  }
}

export default connect(mapStateToProps)(Checkout)