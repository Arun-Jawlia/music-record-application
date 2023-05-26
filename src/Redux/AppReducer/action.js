import * as types from './actionTypes'
import axios from 'axios'
const getMusicRecordRequest = () =>
{
    return{
        type: types.GET_MUSIC_RECORD_REQUEST
    }
}


const getMusicRecord = (dispatch) =>{
  dispatch(getMusicRecordRequest());

  return axios
    .get(`http://localhost:8080/albums`)
    .then((res) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_FAILURE,
      });
    });
}

export default getMusicRecord