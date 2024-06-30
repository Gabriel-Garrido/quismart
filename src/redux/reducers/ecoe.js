import {
    GET_ESTUDIANTES_SUCCESS,
    GET_ESTUDIANTES_FAIL
} from '../actions/ecoe/types'

const initialState = {
    students: null
}

export default function ecoe(state=initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_ESTUDIANTES_SUCCESS:
            return {
                ...state,
                students: payload
            }
        case GET_ESTUDIANTES_FAIL:
            return {
                ...state,
                students: null
            }
        default:
            return state
    }
}
