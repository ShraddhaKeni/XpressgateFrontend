import React, { useEffect, useRef, useState } from "react";
import "./Addemergencyno.css";
import LogOut from './Utils/LogOut'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from "axios";
import Societyheader from "./Utils/Societyheader";
const Addemergencyno = () => {

  const [contactTypes, setTypes] = useState([])
  const name = useRef([])
  const type = useRef([])
  const contact = useRef([])

  useEffect(()=>{
    getTypes()
  },[])

  const getTypes=async()=>{
    try {
      const {data} = await axios.get(`${window.env_var}api/admin/emergencycontactstype/getAlltype`)
      setTypes(data.data.emergencycontacttypes)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try {
      if(name.current.value!==""&&type.current.value!==""&&contact.current.value!=="")
      {
        document.getElementById('contact_name').style.border='none'
        document.getElementById('contact_number').style.border='none'
        const sendData = {
          contactName:name.current.value,
          contactType:type.current.value,
          contactNumber:contact.current.value
        }
        const {data} = await axios.post(`${window.env_var}api/emergencycontacts/addContact`,sendData)
        window.location.href='/emergencyList'
      }
      else
      {
        if(name.current.value=="")
        {
          document.getElementById('contact_number').style.border='none'
          document.getElementById('contact_name').style.border='1px solid red'
        }
        else if(contact.current.value=="")
        {
          document.getElementById('contact_name').style.border='none'
          document.getElementById('contact_number').style.border='1px solid red'
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="addguestcontainer1">
      <div id="headersection1">
      <div id="addflatsection">
        <Societyheader/>
      </div>
      </div>
      <div id="societynamesection">
        <div className="societyname">
          <img src="/images/profileicon.svg" alt="Society image" />
          <label>Society Name</label>
        </div>
        
        <div className="sideimage4">
          <img src="/images/communitysideimg.svg" alt="dashboard sideimage" />
        </div>
      </div>
      <div className="addguestbackgroundimg">
        <div className="Addguestdisplay3">
          <label>Add Emergency Number</label>
        </div>
        <Form className='formclass'>
         
            <div class="form-group row">
              <label class="col-lg-2 col-form-label labelsize">Name</label>
              <div class="col-lg-4">
                <input type="text" class="form-control input-lg" id="contact_name" ref={name} name="Name" placeholder="Name"></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label labelsize">Phone Number</label>
              <div class="col-lg-4">
                <input type="number" class="form-control input-lg" id="contact_number" ref={contact} name="Phone Number" placeholder="Contact"></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label labelsize">Type</label>
              <div class="col-lg-4">
                <select  class="form-control input-lg" ref={type} name="Type">
                    <option value={null} selected disabled>Select Type</option>
                    {contactTypes.map((items)=> {
                      return <option value={items.id}>{items.emgContactType}</option>
                    })}
                </select>
              </div>
            </div>
            
            <Button type="submit" onClick={(e)=>handleSubmit(e)} className="btnAdd">Add Number</Button>
            </Form>
       
       
      </div>
    </div>
  );
};

export default Addemergencyno;
