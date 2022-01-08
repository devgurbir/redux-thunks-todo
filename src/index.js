import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const logState = () => {
  console.log(store.getState());
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <button onClick={logState}>Log State</button>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
