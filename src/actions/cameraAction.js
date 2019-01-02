//ACTIONS
export const FETCH_CAMERAS_LOADING = "FETCH_CAMERAS_LOADING";
const fetchCamerasLoading = () => ({ type: FETCH_CAMERAS_LOADING })

export const FETCH_CAMERAS_SUCCESS = "FETCH_CAMERAS_SUCCESS";
const fetchCamerasSuccess = (cameras) => ({ type: FETCH_CAMERAS_SUCCESS, payload: cameras })

export const FETCH_CAMERAS_ERROR = "FETCH_CAMERAS_ERROR";
const fetchCamerasError = () => ({ type: FETCH_CAMERAS_ERROR })

export const EDIT_SEARCH = "EDIT_SEARCH"
const editSearch = (search) => ({ type: EDIT_SEARCH, payload: search })

//THUNKS

export const getCameras = () => dispatch => {
  dispatch(
    fetchCamerasLoading
  )
  return fetch('http://localhost:8082/api/cameras')
    .then(response => response.json())
    .then(cameras => {
      dispatch(
        fetchCamerasSuccess(cameras)
      )
    })
    .catch(err => {
      dispatch(
        fetchCamerasError()
      )
    })
}

export const filter = (search) => dispatch => {
  dispatch(
    editSearch(search)
  )
}