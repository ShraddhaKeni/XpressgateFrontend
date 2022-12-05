import React, { useRef } from "react";
import "./Reset.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reset= () => {
  let username = useRef([]);

  const navigate = useNavigate()
 
  const sendOTP = async()=>{
    try {
      const {data} = await axios.post(`${window.env_var}api/society/societyforgotpass`,{mobileno:username.current.value})
      navigate('/scotp',{state:{mobileno:data.data.mobileno}})
    } catch (error) {
      
    }
  }

  
  return (
    <div className="logincontainer4">
      {/* <div id="logoid">
        <img src="/images/loginlogo.svg" alt="" />
        </div> */}
        

      <div id="loginimgid4">
        <img src="/images/societylogin.svg" alt="" />
      </div>
      <div id="loginformid4">
        <Form>
          <div className="input_fields4">
          <div id="logoid4">
            <img src="/images/loginlogo.svg" alt="" />
          </div>
         
            <div className="btsign" disabled>
              FORGOT PASSWORD
            </div>
            <br />
            <div className="email_input">
              <label className="entermob">Enter Mobile</label>
              <input
                ref={username}
                type="text"
                className="form-control emailtextbox"
                onKeyPress={(e) => {
                  document.getElementById(e.target.id).style.border = "none";
                }}
                id="loginemailid"
                placeholder=""
              ></input>
            </div>
            <br></br>
            <div className="email_input">
              
              <br />
              <Button
                type="button"
                className="btlogin4"
                onClick={()=>sendOTP()}
              >
                Send Code
              </Button>
            </div>

            
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Reset;
