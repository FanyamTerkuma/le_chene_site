import React, {useState} from "react";
// import Illustration from "../illustrations/Illustration";
import { pana, customer_icon, google_logo, logoIcon } from "../../assets/index";
import FormHeader from "../../components/Form/FormHeader"

// import Logo from "../logo/Logo";
import "./Login.css";

import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
// import Button from "../ui/buttons/Button";
import { Icon } from "@mui/material";

const Illustration = (props) => {
  return (
    <div>
      <img
        className="illustration"
        src={props.src}
        alt={props.alt}
        width={props.width}
      />
    </div>
  );
};

const logo = (props) => {
    return (
      <div>
        <img
          className="le_chene_logo"
          src={logoIcon}
          alt="le_chene logo"
          style={{ width: `${props.width}` }}
        />
      </div>
  
    )
  }
 

const Login = () => {
  let eyeoff = <VisibilityOffOutlined />;
  let eye = <VisibilityOutlined />;
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeoff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeoff);
      setType("password");
    }
  };

  return (
    <div className="container">
      <div className="header">
       {logo}
      </div>
      <div className="illustration">
        <Illustration src={pana} alt=" an illustration of login page " />
      </div>
      <div className="login_form_section">
        <div className="form_wrapper">
          <FormHeader 
            title="Login"
            description="Login to your account using registered credentials"
          />
          <form className="form">
            <div className="input_wrapper">
              <input
                className="custom_input"
                type="email"
                placeholder="Enter email address"
              />
              <div className="input_icon">
                <img src={customer_icon} alt="a person icon" />
              </div>
            </div>
            <div className="input_wrapper">
              <input
                className="custom_input"
                type={type}
                placeholder="Enter password"
              />
              <span
                onClick={handleToggle}
                className="input_icon clickable_icon"
              >
                <Icon>{icon}</Icon>
              </span>
            </div>
            <div className="remember_me_section">
              <div className="remember_me">
                <input className="check_box" type="checkbox" />
                <p>Remember me</p>
              </div>
              <div className="forgot_password">
                <p>Forgot password?</p>
                <a href="#">click here</a>
              </div>
            </div>
            <div className="login_button_container">
              <button style={{fontWeight: "700",
                fontFamily: "inter",
                fontSize: "20px",
                width: "500px",
                height: "74px"}}
                >
                Login
                </button>
            </div>
            <div className="sign_up_section">
              <div className="sign_up">
                <p>Don't have an account yet?</p>
                <a href="#">sign up</a>
              </div>
              <div className="continue_with">
                <div className="separator"></div>
                <p>Or continue with</p>
                <div className="separator"></div>
              </div>
              <div className="google_wrapper">
                <div className="google_signup">
                  <img
                    className="google_logo"
                    src={google_logo}
                    alt="google_logo"
                  />
                  <a style={{ color: "black" }} href="#">
                    create your new account with Google
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
