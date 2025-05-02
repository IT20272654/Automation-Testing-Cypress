import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register";
const btnText = "Sign up";



const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/login";

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // login with email password
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value; // Get the confirm password field

    if (password !== confirmPassword) {
      // Passwords do not match, set an error message
      setErrorMessage(<div className="Erormessage">Passwords doesn't match! Please provide correct password</div>);
    } else {
      // Passwords match, proceed with signup logic
      setErrorMessage(""); // Clear the error message
      createUser(email, password)
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
          alert("Account Created Successfully!")
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(`${errorMessage}`)
        });
    }
  };
  return (
    <div>
    <Navbar/>
    <br/><br/>
    <table align="center">
    <div>
      <div className="signupform padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="username">
              <div></div>User Name</div>
                <input className="inputusername"
                  type="text"
                  name="username"
                  placeholder="Enter User Name" />
        
             <div className="email">
              <div></div>Email Address</div>
                <input className="inputEmail"
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                />

              <div className="password">
              <div></div>Password</div>
                <input className="inputPassword"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
             <div className="password">
              <div></div>Confirm Password</div>
                <input className="inputPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              {/* showing error message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group text-center">
                <button className="signupButton">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login"><b><u>Login</u></b></Link>
              </span>
              
               
            </div>
          </div>
        </div>
      </div>
    </div>
    </table>
    <br/> <br/> <br/> <br/> <br/> 

    </div>
  );
};

export default Signup;
