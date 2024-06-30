import {
    GET_ESTUDIANTES_SUCCESS,
    GET_ESTUDIANTES_FAIL
} from '../actions/ecoe/types'

const initialState = {
    estudiantes: null
}

export default function ecoe(state=initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_ESTUDIANTES_SUCCESS:
            return {
                ...state,
                estudiantes: payload
            }
        case GET_ESTUDIANTES_FAIL:
            return {
                ...state,
                estudiantes: null
            }
        default:
            return state
    }
}
