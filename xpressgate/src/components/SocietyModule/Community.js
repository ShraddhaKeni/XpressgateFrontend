import React from "react";

import "../SocietyModule/Community.css";
import LogOut from './Utils/LogOut'


const Community = () => {
  
  return (
    <div className="addguestcontainer2">
      <div id="addflatsection">
        <div className="addflatheadersection">
          <div id="aflogo"><img src="/images/loginlogo.svg" alt="header logo" /></div>
          <div id="afsociety"><label>Society</label></div>
          <div id="afspace"></div>
          <div id="afnotification"><a href="abc"><img src="/images/notification.svg" alt="notificationicon" /></a></div>
          <div id="afsetting"><a href="/changesocpassword"><img src="/images/setting.svg" alt="settingicon" /></a></div>
          <div id="aflogoutbutton"><LogOut /></div>
        </div>

      </div>
      <div id="societynamesection">
        <div className="SC_societyname">
          <img src="/images/societyicon.svg" alt="Society image" />
          <label>Society Name</label>
        </div>
        <br />
        {/* <div class="noticelist">
          <h4><b>Notice List</b></h4>
          <a href="/addNotice" class="Notice">Add Notice</a>
        </div> */}
        {/* <div className='csidelinks'>
          <a className='CNsidelinks' href="/noticelist">Notice List</a><br></br><br></br>
          <a className='CANsidelinks' href="/addNotice">Add Notice</a>
        </div> */}
        <div className="SC_sideimage">
          <img src="/images/societysideimg.svg" alt="dashboard sideimage" />
        </div>

      </div>
      <div className="addguestbackgroundimg">
        <div className="SC_display">
          <label>Community Management</label>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 cfullcardscss allcards">
          <div className="col card_hover_animation">
            <div className="Cdashboardcard">
              <a href="/management">
                <img
                  src="/images/Mteam.svg"
                  className="dbcard-img-top"
                  alt="Management Team"
                ></img>
              </a>
            </div>
          </div>
          <div className="col card_hover_animation">
            <div className="Cdashboardcard">
              <img
                src="/images/Lservices.svg"
                className="dbcard-img-top"
                alt="Local Services"
                onClick={() => {
                  window.location.href = "/localservices";
                }}
              ></img>
            </div>
          </div>
          <div className="col card_hover_animation">
            <div className="Cdashboardcard">
              <img
                src="/images/emergency.svg"
                className="dbcard-img-top"
                onClick={() => {
                  window.location.href = "/emergencyList";
                }}
                alt="Emergency"
              ></img>
            </div>
          </div>
          <div className="col card_hover_animation">
            <div className="Cdashboardcard">
              <img
                src="/images/reportbox.svg"
                className="dbcard-img-top"
                onClick={() => {
                  window.location.href = "/socreports";
                }}
                alt="Emergency"
              ></img>
            </div>
          </div>
          <div className="col card_hover_animation">
            <div className="Cdashboardcard">
              <img
                src="/images/reportbox.svg"
                className="dbcard-img-top"
                onClick={() => {
                  window.location.href = "/utilitypaymentlinklist";
                }}
                alt="utilitypaymentlink"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
