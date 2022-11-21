import React from 'react'
import {Button} from 'react-bootstrap'
import '../SocietyModule/Vendor_Payment_LogOut.css';

const Vendor_Payment_LogOut= () => {
    const guardLogout=()=>{
        localStorage.clear()
        window.location.href='/'
    }
  return (
    <Button type="button" onClick={()=>guardLogout()} className="btnlogout">Log Out<img src="/images/logout.svg" alt="header logo" /></Button>
  )
}

export default Vendor_Payment_LogOut;