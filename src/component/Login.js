import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../Context/UserAuthContext";

const Login = ({data}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const [emailTouched, setEmailTouched] = useState(false);
  const emailIsValid =
    email.trim() !== ""  || password.trim() !== "";
  const nameInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (emailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordCangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEmailTouched(true);
  };

  const history = useNavigate();

  const onSubmit = (e) => {
      e.preventDefault()
      history('/signup')
      
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    setEmailTouched(true);
    if (!emailIsValid) {
      return;
    }
    
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
    alert("Login in successfully");

    history("/");
    setEmailTouched(false);
    data()
  };

  return (
    <>
      <div style={{ textAlign: "" }}>
        <h1>Login Form</h1>
      </div>

      <div style={{ width: "40%", marginLeft: "30%", marginTop: "20px" }}>
        <form onSubmit={formSubmissionHandler}>
          <div className="form-group" style={{textAlign:'start'}}>
            <label>Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onBlur={nameInputBlurHandler}
              onChange={nameInputChangeHandler}
            />
            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>Email is required</p>
            )}

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onBlur={nameInputBlurHandler}
              onChange={passwordCangeHandler}
            />

            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>password is required</p>
            )}
          </div>
          <div>
            <Link to="/forget">Forgot Password</Link>
          </div>
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            class="btn btn-primary"
          >
            Login
          </button>
        </form>
        <button onClick={onSubmit}
          style={{marginTop:'-60px', marginLeft: "200px" }}
          type="submit"
          class="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Login;






