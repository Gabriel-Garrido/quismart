import axios from "axios";
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
} from "./types";

const config = {
  headers: {
    Accept: "application/json",
  },
};

export const get_stations = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/stations/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STATIONS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STATIONS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STATIONS_FAIL,
    });
  }
};

export const create_station = (station) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/ecoe/stations/`,
      station,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (res.status === 201) {
      dispatch({
        type: CREATE_STATION_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: CREATE_STATION_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: CREATE_STATION_FAIL,
    });
  }
};

export const get_students = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/students/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STUDENTS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STUDENTS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STUDENTS_FAIL,
    });
  }
};

export const get_studentDetail = (studentId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STUDENT_DETAIL_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STUDENT_DETAIL_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STUDENT_DETAIL_FAIL,
    });
  }
};

export const get_studentEvaluations = (studentId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/evaluations/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STUDENT_EVALUATIONS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STUDENT_EVALUATIONS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STUDENT_EVALUATIONS_FAIL,
    });
  }
};

export const get_groupEvaluations = (groupId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/evaluation-groups/${groupId}/evaluations/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_GROUP_EVALUATIONS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GROUP_EVALUATIONS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GROUP_EVALUATIONS_FAIL,
    });
  }
};

export const get_studentGroups = (studentId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/evaluation-groups/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STUDENT_GROUPS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STUDENT_GROUPS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STUDENT_GROUPS_FAIL,
    });
  }
};

export const get_studentGroupEvaluations = (studentId, groupId) => async (dispatch) => {

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/evaluation-groups/${groupId}/evaluations/`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_STUDENT_GROUP_EVALUATIONS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_STUDENT_GROUP_EVALUATIONS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_STUDENT_GROUP_EVALUATIONS_FAIL,
    });
  }
};
