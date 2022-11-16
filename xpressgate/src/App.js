import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
//require('dotenv').config()
import Login from './components/GuardModule/Login';
import Dashboard from './components/GuardModule/Dashboard';
import Addvendor from './components/GuardModule/Addvendor';
import Addguest from './components/GuardModule/Addguest';
import Dailyhelplist from './components/GuardModule/Dailyhelplist';
import Videoclass from './components/GuardModule/Videoclass';
import Inoutbook from './components/GuardModule/Inoutbook';
import Vendorlist from './components/GuardModule/Vendorlist';
import Inoutbookcard from './components/GuardModule/Inoutbookcard';
import Frequentvisitor from './components/GuardModule/Frequentvisitor';
import Dailyservicepasscode from './components/GuardModule/Dailyservicepasscode';
import PrivateRoutes from './components/GuardModule/Utils/PrivateRoutes';
import VendorEntryDetails from './components/GuardModule/VendorEntryDetails';
import GuestList from './components/GuardModule/GuestList';
import Forgotpassword from './components/GuardModule/Forgotpassword';
import OTPscreen from './components/GuardModule/otp';
import Newpassword from './components/GuardModule/Newpassword';
import SocietyDashboard from './components/SocietyModule/Societydashboard'
import GuestEntry from './components/GuardModule/GuestEntry';
import Flatlist from './components/SocietyModule/Flatlist'
import Flatapprovallist from './components/SocietyModule/Flatapprovallist'
import Blocklist from './components/SocietyModule/Blocklist'
import Addflat from './components/SocietyModule/Addflat'
import Addnotice from './components/SocietyModule/Addnotice'
import Noticelist from './components/SocietyModule/Noticelist'
import Addvehicle from './components/SocietyModule/Addvehicle'
import SelectMode from './components/auth/SelectMode';
import FlatListNA from './components/SocietyModule/FlatListNA';

function App() {

  window.env_var = "http://143.110.187.80:5050/"
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SelectMode/>} exact></Route>
            <Route path="/dashboard" element={<Dashboard />} exact></Route>
            <Route path="/addvendor" element={<Addvendor />} exact></Route>
            <Route path="/addguest" element={<Addguest />} exact></Route>
            <Route path="/dailyhelp" element={<Dailyhelplist />} exact></Route>
            <Route path="/videoclass" element={<Videoclass />} exact></Route>
            <Route path="/inoutbook" element={<Inoutbook />} exact></Route>
            <Route path="/vendorlist" element={<Vendorlist />} exact></Route>
            <Route path="/inoutbookcard" element={<Inoutbookcard />} exact></Route>
            <Route path="/frequent" element={<Frequentvisitor />} exact></Route>
            <Route path="/dailyservice" element={<Dailyservicepasscode />} exact></Route>
            <Route path="/vendorentry" element={<VendorEntryDetails />} exact></Route>
            <Route path="/guestlist" element={<GuestList />} exact></Route>
            <Route path="/forgotpassword" element={<Forgotpassword />} exact></Route>
            <Route path="/otp" element={<OTPscreen />} exact></Route>
            <Route path="/newpassword" element={<Newpassword />} exact></Route>
            <Route path="/guestentry" element={<GuestEntry />} exact></Route>
            <Route path="/societydashboard" element={<SocietyDashboard />} exact></Route>
            <Route path="/flatlist" element={<Flatlist />} exact></Route>
            <Route path="/flatapprovallist" element={<Flatapprovallist />} exact></Route>
            <Route path="/blocklist" element={<Blocklist />} exact></Route>
            <Route path="/addflat" element={<Addflat />} exact></Route>
            <Route path="/addnotice" element={<Addnotice />} exact></Route>
            <Route path="/noticelist" element={<Noticelist />} exact></Route>
            <Route path="/addvehicle" element={<Addvehicle />} exact></Route>
            <Route path="/guardLogin" element={<Login />} exact></Route>
            <Route path="/addFlat" element={<Addflat/>} exact></Route>
            <Route path="/blockList" element={<Blocklist/>} exact></Route>
            <Route path="/flatList" element={<Flatlist/>} exact></Route>
            <Route path="/naFlatList" element={<FlatListNA/>} exact></Route>
            <Route path="/approveFlat" element={<Flatapprovallist/>} exact></Route>
            <Route path="/noticeList" element={<Noticelist/>} exact></Route>
            <Route path="/addNotice" element={<Addnotice/>} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
