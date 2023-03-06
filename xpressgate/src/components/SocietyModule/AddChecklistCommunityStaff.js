import React, { useEffect, useState } from "react";
import "./Addguard.css";
import LogOut from './Utils/LogOut'
import { Form } from 'react-bootstrap';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { checkSociety } from '../auth/Auth'
import { useNavigate } from 'react-router-dom';
import { Loader } from "../Loader";
import ErrorScreen from "../../common/ErrorScreen";
import { goBackInOneSec, reloadInOneSec, TOAST } from "../../common/utils";
import { ToastMessage } from "../ToastMessage";

const AddChecklistCommunityStaff = () => {
    const [loading, setLoading] = useState(true)
    const [staffTypes, setStaffTypes] = useState([]);
    const location = useLocation()
    const [type, setType] = useState(location?.state?.type || 'add')
    const navigate = useNavigate()
    const [isError, setError] = useState(false)
    const [toast, setToast] = useState({ show: false })

    console.log(location.state);
    const [guard, setGuard] = useState(location?.state?.data || undefined);



    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            if (type == 'edit') {
                let formdata = {
                    'community_id': localStorage.getItem('community_id'),
                    'name': document.getElementById('name').value,
                    'contact': document.getElementById('contact').value,
                    'service': document.getElementById('service').value,
                    'address': document.getElementById('address').value,
                    'id': location.state.id
                }
                const { data } = await axios.post(`${window.env_var}api/checklist/add`, formdata)

                if (data && data?.status_code == 200) {
                    setToast(TOAST.SUCCESS(data?.message));
                    goBackInOneSec(navigate)
                } else if (data?.status_code == 201) {
                    setToast(TOAST.ERROR(data?.message));
                }
            }
            else {

                let formdata = {
                    'community_id': localStorage.getItem('community_id'),
                    'name': document.getElementById('name').value,
                    'contact': document.getElementById('contact').value,
                    'service': document.getElementById('service').value,
                    'address': document.getElementById('address').value,
                }


                const { data } = await axios.post(`${window.env_var}api/societystaff/add`, formdata)

                alert(1)
                if (data && data?.status_code == 200) {
                    setToast(TOAST.SUCCESS(data?.message));
                    reloadInOneSec(navigate)
                } else if (data?.status_code == 201) {
                    setToast(TOAST.ERROR(data?.message));
                }

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        if (checkSociety()) {
            const config = {
                headers: {
                    'x-access-token': localStorage.getItem('accesstoken')
                }
            }
            axios.get(`${window.env_var}api/society/checkLogin`, config)
                .then(async ({ data }) => {
                    if (location.state) {
                        getGuardDetails()
                        setType(location.state.type)
                        console.log(type);
                    }
                    else {
                        // window.history.back(-1)
                    }

                    await getStaffTypes();
                })
                .catch(err => {
                    localStorage.clear();
                    window.location.href = '/societylogin'
                })
            setLoading(false);
        }
        else {
            window.location.href = '/'
        }



    }, [])

    const getStaffTypes = async () => {
        try {
            const { data } = await axios.get(`${window.env_var}api/admin/otherstaff/getAll`)
            setStaffTypes(data.data.OtherStaffType)
            setError(false)
            //console.log(data.data.community.filter(x=>x.name))
            //setCommunityid(data.data.community[0].name)
        } catch (error) {
            setError(true)
        }
    }

    const getGuardDetails = async () => {
        try {
            const { data } = await axios.get(`${window.env_var}api/societystaff/getone/${location.state.id}`)
            console.log("Data Gouse", data.data.Details);
            setGuard(data.data.Details[0])
            setError(false)
        } catch (error) {
            setError(true)
        }
    }

    if (isError)
        return <ErrorScreen />

    return (
        <div className="addguestcontainer4">
            <ToastMessage show={toast.show} message={toast.message} type={toast.type} handleClose={() => { setToast({ show: false }) }} />

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
                <div className="AGSname">
                    <img src="/images/societyicon.svg" alt="Society image" />
                    <label>Society Name</label>
                </div>

                <div className='GLsidelinks pl-5'>

                    <p className='noticegll float-left' onClick={() => navigate('/community-staff-checklist-report')}><b>Reports</b></p>
                    <p className='aggnotice float-left' onClick={() => navigate('/add-community-staff-checklist')}><b>Add Staff</b></p>
                    <p className='noticegll float-left' onClick={() => navigate('/community-staff-checklist')}><b>Society Staff</b></p>

                </div>
                <div className="AGSideimg">
                    <img src="/images/communitysideimg.svg" alt="dashboard sideimage" />
                </div>
            </div>
            <div className="addguestbackgroundimg">
                <Loader loading={loading}>
                    <div className='AG_display'>
                        <label>{type == 'edit' ? 'Update Staff' : 'Add Staff'}</label>
                    </div>
                    <Form className='formclass' onSubmit={(e) => handleSubmit(e)}>

                        <div class="form-group form-group6 row">
                            <label class="col-lg-2 col-form-label ADN_label">Name</label>
                            <div class="col-lg-4">
                                {type == 'edit' ? <input type="text" class="form-control input-lg SideB" name="item" id="name" defaultValue={guard.name} placeholder="Enter Staff Name" required />
                                    : <input type="text" class="form-control input-lg input-lg1 SideB" name="item" id="name" placeholder="Enter Staff Name" required />}

                            </div>
                        </div>

                        <div class="form-group form-group6 row">
                            <label class="col-lg-2 col-form-label ADN_label">Phone</label>
                            <div class="col-lg-4">
                                {type == 'edit' ? <input type="number" class="form-control input-lg SideB" name="contact" id="contact" defaultValue={guard.contact} placeholder="Enter Phone Number" required />
                                    : <input type="number" class="form-control input-lg input-lg1 SideB" name="contact" id="contact" placeholder="Enter Phone Number" required />}

                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-lg-2 col-form-label ADN_label">Service</label>
                            <div class="col-lg-4">
                                <select class="form-control input-lg ADTBorder" id="service" placeholder="Block">
                                    <option value={null} disabled selected>Select Service Type</option>
                                    {staffTypes && staffTypes.map(item => {
                                        console.log(item.id, guard.service)
                                        return (
                                            <option value={item.id} selected={item.id === guard?.service}>{item.designation}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-group6 row">
                            <label class="col-lg-2 col-form-label ADN_label">Address</label>
                            <div class="col-lg-4">
                                {type == 'edit' ? <textarea type="text" class="form-control input-lg SideB" name="address" id="address" defaultValue={guard.address} placeholder="Enter Address" required />
                                    : <textarea type="text" class="form-control input-lg input-lg1 SideB" name="address" id="address" placeholder="Enter Address" required />}

                            </div>
                        </div>

                        <button type="submit" className="btnAddV">{type == 'edit' ? 'Update' : 'Add'}</button>
                    </Form>
                </Loader>
            </div>
        </div >



    );
};

export default AddChecklistCommunityStaff;
