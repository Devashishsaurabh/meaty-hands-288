import axios from "axios";
import * as types from "./actiontype"

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("http://localhost:8080/auth/register", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.SIGNUP_FAILURE, payload: e }));
};

export const login = (params) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios
      .post("http://localhost:8080/auth/login", params)
      .then((r) => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: e });
      });
  };