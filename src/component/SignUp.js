import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid =
    enteredName.trim() !== "" || password.trim() !== "" || firstname.trim() !== "" || lastname.trim() !== "" ;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const FirstHandler = (event) => {
    setFirstName(event.target.value);
  };

  const LastHandler = (event) => {
    setLastName(event.target.value);
  };

  const passwordCangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const history = useNavigate();

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // const expenseData = {
    //     //Add data in list
    //     id: new Date().getTime(),
    //     enteredName: enteredName,
    //     password: password,
    //   };
    //   console.log(expenseData);

    //   setUser([expenseData, ...user]);

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(password);

    setEnteredName("");
    setPassword("");
    alert("Registration  in successfully");
    history("/login");

    setEnteredNameTouched(false);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Registration Form</h1>
      </div>

      <div style={{ width: "50%", marginLeft: "30%", marginTop: "20px" }}>
        <form onSubmit={formSubmissionHandler}>
          <div className="form-group" style={{textAlign:'start'}}>

          <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First name"
              value={firstname}
              onBlur={nameInputBlurHandler}
              onChange={FirstHandler}
            />
            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>First is required</p>
            )}

<label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last name"
              value={lastname}
              onBlur={nameInputBlurHandler}
              onChange={LastHandler}
            />
            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>Last is required</p>
            )}





            <label>Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={enteredName}
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
            Submit
          </button>
        </form>
      </div>
      
    </>
  );
};

export default SignUp;
