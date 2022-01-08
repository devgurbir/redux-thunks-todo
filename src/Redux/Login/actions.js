import axios from "axios";
import { saveData } from "../../Utils/localStorage";

export const actionConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE"
};

// Action creators
function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST
  };
}

function loginSuccess(token) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: token
  };
}

function loginFailure(error) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: error
  };
}
// Thunk action creator
const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const data = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    });
    dispatch(loginSuccess(data.data.token));
    saveData("token", data.data.token);
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
  }
};

export { loginUser, loginRequest, loginFailure, loginSuccess };
