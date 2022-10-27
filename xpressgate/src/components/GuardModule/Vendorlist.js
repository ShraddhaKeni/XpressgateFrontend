import React from 'react';
import './Vendorlist.css';
import { Button } from 'react-bootstrap';

const Vendorlist = () => {

  return (
    <div className="vendor_container1">
      <div id="headersection">
        <div class="firstheadersection">
          <div id="dashboardlogo"><img src="/images/loginlogo.svg" alt="header logo" /></div>
          <div id="dashboardguard"><label>Guard</label></div>
          <div id="dashboardspace"></div>
          <div id="dashboardnotification"><a href="abc"><img src="/images/notification.svg" alt="notificationicon" /></a></div>
          <div id="dashboardsetting"><a href="abc"><img src="/images/setting.svg" alt="settingicon" /></a></div>
          <div id="dashboardlogoutbutton"> <Button type="submit" className="btnlogout">Log Out<img src="/images/logout.svg" alt="header logo" /></Button></div>
        </div>
      </div>
      <div id="guardnamesection">
        <div className='guardname'>
          <img src="/images/guardnameicon.svg" alt="guard name" />
          <label>Guard Name</label>
        </div>
        <div className='sideimage'><img src="/images/sideimage.svg" alt="dashboard sideimage" /></div>
      </div>
      <div className='backgroundimg'>
        <div className='Addvendordisplay'>
          <label>Vendor List</label>
        </div>
        <div className='row'>
          <div className='searchbox'>
            <span><img src="/images/vendorlistsearch.svg" alt='search icon'></img></span>
            <span><label className='searchlabel'>Search</label></span>
          </div>
          <div className='addvendor'>
            <span><img src="/images/addvendor.svg" alt='addvendor icon'></img></span>
            <span><label className='addvendorlabel'>Add Vendor</label></span>
          </div>
        </div>
        {/* <div class="table-responsive"> */}
        <table id="inoutbooktable" class="table table-striped table-bordered table-sm " cellspacing="0" style={{ border: '2px solid black' }}>
          <thead>
            <tr>
              <th class="th-sm"></th>
              <th class="th-sm">Name</th>
              <th class="th-sm">Vendor type</th>
              <th class="th-sm">Block</th>
              <th class="th-sm">Flat No.</th>
              <th class="th-sm">Date</th>
              <th class="th-sm">In time</th>
              <th class="th-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ram naik</td>
              <td>Electrician</td>
              <td>Block A</td>
              <td>1010</td>
              <td>Today</td>
              <td>16:20</td>
              <td>Out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Vendorlist

