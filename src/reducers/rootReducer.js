import { combineReducers } from 'redux'
import cameraReducer from './cameraReducer'

const rootReducer = combineReducers({
  camera: cameraReducer
})

export default rootReducer