import React, { useState } from 'react';
import './Dashboard.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom'
import LogOut from './Utils/LogOut';
import Frequentvisitor from './Frequentvisitor';
import Dailyservicepasscode from './Dailyservicepasscode';
import HeaderSection from './Utils/HeaderSection';
import GuardSideSection from './Utils/GuardSideSection';

const Dashboard = () => {

  const [entryData, setEntryData] = useState({})
  const [message, setMessage] = useState({})

  const checkInputs = async () => {
    let a = document.getElementById('1').value
    let b = document.getElementById('2').value
    let c = document.getElementById('3').value
    let d = document.getElementById('4').value
    let e = document.getElementById('5').value
    let f = document.getElementById('6').value

    let code = parseInt(a + b + c + d + e + f)
    try {
      const codeData = {
        code: code,
        community_id: "632970d054edb049bcd0f0b4"
      }
      let { data } = await axios.post(`api/inoutentires/getdata`, codeData)
      setEntryData(data.data.bookingdetails)
      setMessage(data.message)
  
    } catch (error) {
      console.log('Please check again');
    }
  }

  const shiftFocus=(e)=>{
    let id = parseInt(e.target.id)
    if(e.target.value=='')
    {
      document.getElementById(id-1).focus()
    }
    else
    {
      document.getElementById(id+1).focus()
    }
  }
  
 
  return (
    <>
      {entryData.booked ?message=='Vendor'?<Frequentvisitor freqvisitordata={entryData}/>:<Dailyservicepasscode/> : <div className="dashboardcontainer">
        <HeaderSection/>
        <GuardSideSection/>
        <div className='backgroundimg'>
          <div id="cardsection">
            <div className='enterpasscodesearch'>
              <label>ENTER PASSCODE</label>
              <div className='code'>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='1'></input>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='2'></input>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='3'></input>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='4'></input>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='5'></input>
                <input type='text' className='dashboard_passcode' onKeyUp={e=>{shiftFocus(e)}}  maxlength="1" id='6'></input>
              </div>

              <img src="/images/searchicon.svg" onClick={() => { checkInputs() }} alt="search" />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 fullcardscss">
              <div className="col">
                <div className="dashboardcard">
                  <a href='abc'><img src="/images/guestcard.svg" className="dbcard-img-top" alt="guest card"></img></a>
                </div>
              </div>
              <div className="col">
                <div className="dashboardcard">
                  <img src="/images/vendorcard.svg" className="dbcard-img-top" alt="vendor card" onClick={()=>{window.location.href='/vendorlist'}}></img>
                </div>
              </div>
              <div className="col">
                <div className="dashboardcard">
                  <img src="/images/dailyhelpcard.svg" className="dbcard-img-top" onClick={()=>{window.location.href='/dailyhelp'}} alt="dailyhelp card"></img>
                </div>
              </div>
              <div className="col">
                <div className="dashboardcard">
                  <img src="/images/inoutbookcard.svg" className="dbcard-img-top" alt="inout book card"></img>
                </div>
              </div>
              <div className="col">
                <div className="dashboardcard">
                  <img src="/images/videoclass.svg" className="dbcard-img-top" alt="video class"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Dashboard

