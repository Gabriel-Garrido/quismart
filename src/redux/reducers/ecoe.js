import {
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAIL,
    GET_STUDENT_DETAIL_SUCCESS,
    GET_STUDENT_DETAIL_FAIL
} from '../actions/ecoe/types'

const initialState = {
    students: null
}

export default function ecoe(state=initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_STUDENTS_SUCCESS:
            return {
                ...state,
                students: payload
            }
        case GET_STUDENTS_FAIL:
            return {
                ...state,
                students: null
            }
        case GET_STUDENT_DETAIL_SUCCESS:
            return {
                ...state,
                studentDetail: payload,
                error: null,
            };
            case GET_STUDENT_DETAIL_FAIL:
            return {
                ...state,
                student: null,
                error: 'Failed to fetch student details',
            };
        default:
            return state
    }
}
