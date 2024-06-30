import axios from 'axios'
import {
    GET_ESTUDIANTES_SUCCESS,
    GET_ESTUDIANTES_FAIL
} from './types'

export const get_students = () => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/ecoe/students/`, config)

        if(res.status === 200) {
            dispatch({
                type: GET_ESTUDIANTES_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: GET_ESTUDIANTES_FAIL
            })
        }

    }catch(err){
        dispatch({
            type: GET_ESTUDIANTES_FAIL
        })
    }
}
