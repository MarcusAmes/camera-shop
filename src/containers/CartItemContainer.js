import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cameraAction';

const mapDispatchToProps = dispatch => {
  return{
    removeFromCart: (id) => {
      dispatch(
        removeFromCart(id)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(CartItem)