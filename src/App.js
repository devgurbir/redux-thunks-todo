import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Components/Login";
import Todos from "./Components/Todos/Todos";
import AllRoutes from "./Routes/allRoutes";
import "./styles.css";

export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const isError = useSelector((state) => state.isError);

  return (
    <>
      <div>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/">Todos</Link>
        </span>
      </div>
      <AllRoutes />
    </>
  );

  // return isAuth ? (
  //   <div className="App">
  //     <div>Welcome</div>
  //   </div>
  // ) : (
  //   <div className="App">
  //     <Login />
  //     {isError && <div>Something wen't wrong</div>}
  //     <Todos />
  //   </div>
  // );
}
