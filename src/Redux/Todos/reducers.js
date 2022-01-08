import { actionConstants } from "./actions";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
  total: 0,
  completed: 0
};

const TodosReducers = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.GET_TODOS_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case actionConstants.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload.todos],
        isError: false,
        isLoading: false
      };
    case actionConstants.GET_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: action.payload.errorMessage
      };
    case actionConstants.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionConstants.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isError: false,
        isLoading: false
      };
    case actionConstants.ADD_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: action.payload.errorMessage
      };
    case actionConstants.TOGGLE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionConstants.TOGGLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case actionConstants.TOGGLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage
      };
    case actionConstants.DELETE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionConstants.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case actionConstants.DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      };
    case actionConstants.COUNT_COMPLETED_TODOS:
      let count = 0;
      let total = Number(state.todos.length);
      for (let todo of state.todos) {
        if (todo.status === true) {
          count++;
        }
      }
      return {
        ...state,
        total: total,
        completed: count
      };
    default:
      return state;
  }
};

export default TodosReducers;
