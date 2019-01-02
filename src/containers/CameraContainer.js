import Camera from '../components/Camera'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cameraAction';

const mapDispatchToProps = dispatch => {
  return{
    addToCart: (id) => {
      dispatch(
        addToCart(id)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(Camera)