import {
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAIL,
  GET_STUDENT_DETAIL_SUCCESS,
  GET_STUDENT_DETAIL_FAIL,
  GET_STUDENT_EVALUATIONS_SUCCESS,
  GET_STUDENT_EVALUATIONS_FAIL,
  GET_GROUP_EVALUATIONS_SUCCESS,
  GET_GROUP_EVALUATIONS_FAIL,
  GET_STUDENT_GROUPS_SUCCESS,
  GET_STUDENT_GROUPS_FAIL,
  GET_STUDENT_GROUP_EVALUATIONS_SUCCESS,
  GET_STUDENT_GROUP_EVALUATIONS_FAIL,
  GET_STATIONS_SUCCESS,
  GET_STATIONS_FAIL,
  CREATE_STATION_SUCCESS,
  CREATE_STATION_FAIL,
} from "../actions/ecoe/types";

const initialState = {
  students: [],
  studentDetail: null,
  studentEvaluations: [],
  groupEvaluations: [],
  studentGroups: [],
  studentGroupEvaluations: [],
  stations: [],
  loading: true,
  error: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STATIONS_SUCCESS:
      return {
        ...state,
        stations: payload,
        loading: false,
      };
    case GET_STATIONS_FAIL:
      return {
        ...state,
        stations: [],
        loading: false,
        error: payload,
      };
    case CREATE_STATION_SUCCESS:
      return {
        ...state,
        stations: [...state.stations, payload],
        loading: false,
      };
    case CREATE_STATION_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: payload,
        loading: false,
      };
    case GET_STUDENTS_FAIL:
      return {
        ...state,
        students: [],
        loading: false,
        error: payload,
      };
    case GET_STUDENT_DETAIL_SUCCESS:
      return {
        ...state,
        studentDetail: payload,
        loading: false,
      };
    case GET_STUDENT_DETAIL_FAIL:
      return {
        ...state,
        studentDetail: null,
        loading: false,
        error: payload,
      };
    case GET_STUDENT_EVALUATIONS_SUCCESS:
      return {
        ...state,
        studentEvaluations: payload,
        loading: false,
      };
    case GET_STUDENT_EVALUATIONS_FAIL:
      return {
        ...state,
        studentEvaluations: [],
        loading: false,
        error: payload,
      };
    case GET_GROUP_EVALUATIONS_SUCCESS:
      return {
        ...state,
        groupEvaluations: payload,
        loading: false,
      };
    case GET_GROUP_EVALUATIONS_FAIL:
      return {
        ...state,
        groupEvaluations: [],
        loading: false,
        error: payload,
      };
    case GET_STUDENT_GROUPS_SUCCESS:
      return {
        ...state,
        studentGroups: payload,
        loading: false,
      };
    case GET_STUDENT_GROUPS_FAIL:
      return {
        ...state,
        studentGroups: [],
        loading: false,
        error: payload,
      };
    case GET_STUDENT_GROUP_EVALUATIONS_SUCCESS:
      return {
        ...state,
        studentGroupEvaluations: payload,
        loading: false,
      };
    case GET_STUDENT_GROUP_EVALUATIONS_FAIL:
      return {
        ...state,
        studentGroupEvaluations: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
