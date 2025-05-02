import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import { AuthContext } from "../contexts/AuthProvider";

const title = "Login";
const socialTitle = "Login With Your Google Account";
const btnText = "Login Now";


const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  // console.log(signUpWithGmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

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
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        alert("Login successful!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(<div className="Erormessage">Please provide valid email & password!</div>);
      });
  };

  return (
    <div>
      <Navbar/>
      <br/><br/>
    <table align="center">
      <br/><br/>
    <div className="loginform">
      <table align="center">
      <div className=" padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
              <div  className="email">
                <div>Email Address</div>
                <input className="inputEmail"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
                </div>
              </div>
              <div className="form-group">
                <div className="password">
              <div>Password</div>
                <input className="inputPassword"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
                </div>
              </div>
              {/* showing error message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
               
              </div>
              <div className="form-group text-center">
                <button className="loginButton">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <br/>
            <div className="account-bottom">
              <span > 
                Don’t Have any Account? <Link to="/sign-up"><b><u>Sign Up</u></b></Link>
              </span>
              
              <button onClick={handleRegister} className="github">
                    <i className="icofont-github">Use single sign-on (Google) instead</i>
                  </button>

              {/* social icons */}
              <table align="center">

              <br/>   
           
            
              </table>
            </div>
          </div>
        </div>
      </div>
      </table>
    </div>
    </table>
    <br/> <br/> <br/> <br/> <br/> 
    </div>
    
  );
};

export default Login;
