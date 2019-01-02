import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { filter } from '../actions/cameraAction';

const mapStateToProps = ({cameras}) => {
  return{
    search: cameras.search
  }
}

const mapDispatchToProps = dispatch => {
  return{
    editSearch: (search) => {
      dispatch(
        filter(search)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)