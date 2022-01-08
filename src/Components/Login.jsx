import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../Redux/Login/actions";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    dispatch(loginUser(formValues.email, formValues.password));
    console.log("Done");
  };

  return (
    <>
      {token ? <h3>{token}</h3> : <h3>Login</h3>}
      <form
        onSubmit={(e) => handleSubmit(e, formValues.email, formValues.password)}
      >
        <input
          value={formValues.email}
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          value={formValues.password}
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="Submit" />
      </form>
    </>
  );
};

export default Login;
