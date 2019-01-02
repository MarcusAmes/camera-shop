import { FETCH_CAMERAS_LOADING, FETCH_CAMERAS_SUCCESS, FETCH_CAMERAS_ERROR, EDIT_SEARCH, ADD_CART, REMOVE_CART } from "../actions/cameraAction";

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
    case ADD_CART:
    const addCameraId = state.cameras.findIndex(camera => camera.id === action.payload)
    const addNewCameraList = state.cameras
    addNewCameraList[addCameraId].inCart = true
    return {
      ...state,
      cameras: addNewCameraList
    }
    case REMOVE_CART:
    const removeCameraId = state.cameras.findIndex(camera => camera.id === action.payload)
    const removeNewCameraList = state.cameras
    removeNewCameraList[removeCameraId].inCart = false   
    return {
      ...state,
      cameras: removeNewCameraList
    }
    default:
      return state;
  }
}

export default cameraReducer