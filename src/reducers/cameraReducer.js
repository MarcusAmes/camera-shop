import { FETCH_CAMERAS_LOADING, FETCH_CAMERAS_SUCCESS, FETCH_CAMERAS_ERROR } from "../actions/cameraAction";



const initState = {
  cameras: [],
  camerasLoading: false,
  camerasError: false,
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
    default:
      return state;
  }
}

export default cameraReducer