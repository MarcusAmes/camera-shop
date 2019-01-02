import { FETCH_CAMERAS_LOADING, FETCH_CAMERAS_SUCCESS, FETCH_CAMERAS_ERROR, EDIT_SEARCH } from "../actions/cameraAction";

const initState = {
  cameras: [],
  camerasLoading: false,
  camerasError: false,
  search: ""
}

const cameraReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CAMERAS_LOADING:
      return {
        ...state,
        camerasLoading: true
      }
    case FETCH_CAMERAS_SUCCESS:
      return {
        ...state,
        camerasLoading: false,
        cameras: action.payload
      }
    case FETCH_CAMERAS_ERROR:
      return {
        ...state,
        camerasError: true
      }
    case EDIT_SEARCH:
    return {
      ...state,
      search: action.payload
    }
    default:
      return state;
  }
}

export default cameraReducer