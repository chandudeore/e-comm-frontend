import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login_loading,
  login_success,
  login_failure,
} from "../Redux/Login/action";
import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";

export const Login = () => {
  const [email, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.login);
  if (isAuth) {
    navigate("/");
  }

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const useDetails = {
      email,
      password,
    };
    dispatch(login_loading());
    fetch(`https://e-comm1234.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(useDetails),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(login_success({ token: res.token }));
        console.log(res.token);
      })
      .catch((err) => dispatch(login_failure()));
  };
  return (
    <>
      <div className="login">
        <div className="login2">
          <input
            type="email"
            placeholder="Enter the useraname..."
            onChange={(e) => setUser(e.target.value)}
            value={email}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter the password"
            onChange={(e) => setPass(e.target.value)}
            value={password}
          />{" "}
          <br />
          <button onClick={handleSubmit}>Log-In</button>
          <div>Not Have an Account Create Account</div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};
