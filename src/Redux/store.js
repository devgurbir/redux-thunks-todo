import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./Login/reducers";
import TodosReducers from "./Todos/reducers";

const thunkMiddleware = applyMiddleware(thunk);

const composed = composeWithDevTools(thunkMiddleware);

const combined = combineReducers({ auth: authReducer, todo: TodosReducers });

const store = createStore(combined, composed);

export { store };
