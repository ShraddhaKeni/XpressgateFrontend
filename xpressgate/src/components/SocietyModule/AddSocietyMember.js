import React, { useEffect, useState } from "react";
import "../SocietyModule/AddSocietyMember.css";
import LogOut from './Utils/LogOut'
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import ErrorScreen from "../../common/ErrorScreen";

const AddSocietyMember = () => {
  const [member, setMember] = useState({})
  const [file, setProfilePicFile] = useState()
  const navigate = useNavigate();
  const [communities, setCommunity] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError,setError] = useState(false)
  useEffect(() => {
    getCommunities()
  }, [])

  const getCommunities = async () => {
    try {
      const { data } = await axios.get(`${window.env_var}api/community/get`)
      setCommunity(data.data.community);
      //setLoading(false);
      setError(false)
      setLoading(false);
    } catch (error) {
      setError(true)
    }
  }


  const handleAddSocietyMember = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(member))
    // Pass member to add Society member api - POST
    // What to do with the profile pic?
    try {
      const formData = new FormData();
      formData.append('profile_pic', file)
      for (var key in member) {
        formData.append(key, member[key]);
      }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const { data } = await axios.post(`${window.env_var}api/community/addResident`, formData, config);
      navigate('/admin/dashboard');
    } catch (error) {
      alert(error);
    }
  }
  if(isError)
  return <ErrorScreen/>
  return (

    <>
      <img src='/images/side_bar_img.svg' className='AddPremise_side_Img' />

      <div>
        <div className='page-label'>
          <label>Add Society Member</label>
        </div>
        <div>
          <Form className='formclass fcadmin' style={{ marginLeft: "20rem" }} onSubmit={handleAddSocietyMember}>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Community</label>
              <div class="col-lg-8">
                <select type="text" class="form-control input-lg SideB" id='community_id' name="community_id"
                  onChange={(e) => { setMember({ ...member, community_id: e.target.value }); console.log(member) }}
                >
                  <option value={null} selected>Select Community</option>
                  {communities.length && communities.map((community) => {
                    return <option value={community._id} >{community.name}</option>
                  })}

                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">First Name</label>
              <div class="col-lg-8">
                <input type="text" class="form-control input-lg SideB" id='First_name' name="firstname" placeholder="Enter First Name"
                  onChange={(e) => { setMember({ ...member, firstname: e.target.value }); console.log(member) }}
                >
                </input>

              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Last Name</label>
              <div class="col-lg-8">
                <input type="text" class="form-control input-lg SideB" id='last_name' name="lastname" placeholder="Enter Last Name"
                  onChange={(e) => { setMember({ ...member, lastname: e.target.value }); console.log(member) }}

                >
                </input>

              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Gender</label>
              <div class="col-lg-8">
                <select type="text" class="form-control input-lg SideB" id='gender' name="Gender"
                  onChange={(e) => { setMember({ ...member, gender: e.target.value }); console.log(member) }}
                >
                  <option disabled value={'1'} selected>Male</option>
                  <option value={'2'}>Female</option>

                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">User Name</label>
              <div class="col-lg-8">
                <input type="text" class="form-control input-lg SideB" id='username' name="username" placeholder="Enter Username"
                  onChange={(e) => { setMember({ ...member, username: e.target.value }); console.log(member) }}

                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Mobile No</label>
              <div class="col-lg-8">
                <input type="number" class="form-control input-lg SideB" id='mobile_no' name="Mobile No" placeholder="Enter Mobile No"
                  onChange={(e) => { setMember({ ...member, mobileno: e.target.value }); console.log(member) }}

                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Email</label>
              <div class="col-lg-8">
                <input type="email" class="form-control input-lg SideB" id='email' name="Email" placeholder="Enter Email"
                  onChange={(e) => { setMember({ ...member, email: e.target.value }); console.log(member) }}

                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Profile picture</label>
              <div class="col-lg-8">
                <input type="file" class="form-control input-lg SideB" id='picture' name="profile_pic"
                  onChange={(e) => {
                    let file = e.target.files[0];
                    setProfilePicFile(file)
                  }}
                >
                </input>
              </div>
            </div>


            <div class="form-group row">
              <label class="col-lg-2 col-form-label ADN_label">Designation</label>
              <div class="col-lg-8">
                <input type="text" class="form-control input-lg SideB" id='picture' name="managementTitle" placeholder="Enter Designation"
                  onChange={(e) => {
                    setMember({ ...member, managementTitle: e.target.value });
                  }
                  }
                >
                </input>
              </div>
            </div>

            <div className="AMM_form">
              <div className="inboxes">
                <span>
                  <label for="ToDate" class="STodate">To</label>
                  <input type="date" id="ToDate" className="STodateinput" name="date" placeholder="Date"
                    onChange={(e) => {
                      setMember({ ...member, to: e.target.value });
                    }
                    }
                  ></input>
                </span>
                <span>
                  <label for="ForDate" class="SFromdate">From</label>
                  <input type="date" id="ForDate" className="SFromdateinput"
                    onChange={(e) => {
                      setMember({ ...member, from: e.target.value });
                    }
                    }
                  ></input>
                </span>



              </div>

            </div>


            <button type="submit" className="BUTN_ADD_premise">
              Add Member
            </button>
          </Form>
        </div>
      </div>

    </>
  );
};

export default AddSocietyMember;
