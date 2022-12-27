import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from './LogOut'
import './styles/GuardHeader.css'

const GuardHeader = () => {

  function myFunction() {

  }

  const handleclick = async () => {
    try {
      document.getElementById("imgDropdown").classList.remove("showdropdown");
    }
    catch (error) {

    }
  }

  return (
    <div className="sfirstheadersection">
      <div id="sdashboardlogo"><img src="/images/loginlogo.svg" alt="header logo" /></div>
      <div id="sdashboardguard"><label>Guard</label></div>
      <div id="sdashboardspace"></div>
      <div id="sdashboardnotification"><a href="abc"><img className='bell_icon' src="/images/notification.svg" alt="notificationicon" /></a></div>
      <div id="sdashboardsetting"><img src="/images/setting.svg" className='cog_wheel' id="imgDropdown" alt="settingicon" onClick={() => handleclick()} /></div>

      <ul id="menu">
        <li><a href="/changeguardpass">Change Password</a></li>
        <li><a href="/editguarddetails">Update Guard</a></li>
      </ul>
      <div id="sdashboardlogoutbutton"><LogOut /></div>
    </div>
  )
}

export default GuardHeader