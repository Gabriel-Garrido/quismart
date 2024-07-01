import axios from "axios";
import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAIL, GET_STUDENT_DETAIL_SUCCESS, GET_STUDENT_DETAIL_FAIL } from "./types";

export const get_students = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
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
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
  
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/`,
        config
      );
  
      if (res.status === 200) {
        console.log('res: ', res.data);
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