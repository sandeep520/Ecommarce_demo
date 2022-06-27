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







// import { useState, useEffect } from "react";
// import '../Styles/Login.css'

// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//         <div className="ui message success">Signed in successfully</div>
    

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;


