import React, { useRef, useState} from "react";
import "../SocietyModule/Login.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastMessage } from '../ToastMessage';
const Login_society = () => {
  const [toast, setToast] = useState({ show: false })
  let username = useRef([]);
  let password = useRef([]);

  const loginGuard = async () => {
    try {
      setToast({ show: true, type: "success", message: "Logged in successfully" })
      const loginCreds = {
        username: username.current.value,
        password: password.current.value,
      };
      const { data } = await axios.post(`${window.env_var}api/auth/societylogin`, loginCreds);
      localStorage.clear();
      localStorage.setItem("accesstoken", data.data.accessToken);
      localStorage.setItem("community_id", data.data.community_id);
      localStorage.setItem("member_id", data.data.id);
      localStorage.setItem("resident_id", data.data.resident_id);
      localStorage.setItem('mode', 'society')
      window.location.href = "/scDashboard";
    } catch (err) {
      setToast({ show: true, type: "error", message: "Username or password is incorrect" })
      document.getElementById("socloginemailid").style.border = "2px solid red";
      document.getElementById("loginpassword").style.border = "2px solid red";
    }
  };
  return (
    <div className="LoginContainer">
       <ToastMessage show={toast.show} message={toast.message} type={toast.type} handleClose={() => { setToast({ show: false }) }} />
            <div id="SOC_LogoId">
              <img src="/images/loginlogo.svg" alt="" />
            <div className="SOC_Login_SignIN">
              <label className="SOC_Login_SignIN_Label">SIGN IN</label>
            </div>
            </div>
           


      <div id="SC_LOGIN_IMG">
        {/* <img src="./images/societylogin.svg" alt="" /> */}
        <img src="./images/background.svg" alt="" />
        <img className="society_login_middleLayer_image" src="./images/other.svg" alt="" />
        <img className="society_login_middleLayer_image_face" src="./images/group_206.svg" alt="" />
        <img className="society_login_middleLayer_circle" src="./images/starburst.svg" alt="" />
        <img className="society_login_middleLayer_pen" src="./images/hand.svg" alt="" />
      </div>
      <div id="SOC_Login_FormId">
        <Form>
          <div className="SOC_Input_Fields">
            
            <div className="socemail_input">
              <label className="Soc_Name">User Name</label>
              <input
                ref={username}
                type="text"
                className="form-control Soc_emailtextBox"
                onKeyPress={(e) => {
                  document.getElementById(e.target.id).style.border = "none";
                }}
                id="socloginemailid"
                placeholder="Username"
              ></input>
            </div>
            <br></br>
            <div className="socemail_input">
              <label className="Soc_Password">Password</label>
              <input
                ref={password}
                type="password"
                className="form-control Soc_Password_textBox"
                onKeyPress={(e) => {
                  document.getElementById(e.target.id).style.border = "none";
                }}
                id="loginpassword"
                placeholder="Password"
              ></input>
              <br />
              <button
                type="button"
                className="socbtnlogin"
                onClick={() => {
                  loginGuard();
                }}
              >
                Login
              </button>
            </div>

            <div className="socforgotpassword"><a href="/screset" >Forgot Password?</a></div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login_society;
