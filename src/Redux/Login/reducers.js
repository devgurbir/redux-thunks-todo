import { loadData } from "../../Utils/localStorage";
import { actionConstants } from "./actions";

const token = loadData("token") || null;

const initState = {
  token: token,
  isLoading: false,
  isError: false,
  isAuth: !!token
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case actionConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case actionConstants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isError: false,
        isAuth: true
      };

    case actionConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false
      };

    default: {
      return state;
    }
  }
}

export default authReducer;
