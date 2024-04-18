import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User_Login from './components/User_Login.js';
import Foot from './components/Foot.js'
import Body from './components/Body.js'
import Owlcarsol from './components/Owlcarsol.js';
import Regis from './components/Regis.js';
import Seller_login from './components/Seller_login.js';
import Seller_reg from './components/Seller_reg.js';
import Adminn from './components/Adminn.js';
import About from './components/About.js';
import Contactus from './components/Contactus.js';
import Privacypolicy from './components/Privacypolicy.js';
import Terms from './components/Terms.js';
import Feedback from './components/Feedback.js';
import Saftey from './components/Saftey.js';
import Navs from './components/Navs.js';
import UserNav from './components/Nav/UserNav.js';
import SellerNav from './components/Nav/SellerNav.js';
import CommonNav from './components/Nav/CommonNav.js';
import AdminNav from './components/Nav/AdminNav.js';
import UserProfile from './components/User/UserProfile.js';
import UserOrders from './components/seller/UserOrders.js';
import Orders from './components/User/Orders.js';
import SellersList from './components/User/SellersList.js';
import UserCart from './components/User/UserCart.js';
import UserMesssage from './components/User/UserMesssage.js';
import PropertiesList from './components/User/PropertiesList.js';
import SellerMessage from './components/seller/SellerMessage.js';
import Properties from './components/seller/Properties.js';
import SellerProfile from './components/seller/SellerProfile.js';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/User_login' element={[<CommonNav />, <User_Login />, <Foot />]} />
          <Route path='/seller_login' element={[<CommonNav />, <Seller_login />, <Foot />]} />
          <Route path='/reg' element={[<CommonNav />, <Regis />, <Foot />]} />
          <Route path='/seller_reg' element={[<CommonNav />, <Seller_reg />, <Foot />]} />

          {/* <Route path='/Body' element={<Body/>}/> */}
          {/* <Route path='/Owl' element={<Owlcarsol/>}/> */}
          {/* <Route path='/whole' element={[<CommonNav />, <Owlcarsol />, <Body />, <Foot />]} /> */}

          <Route path='/admin' element={[<AdminNav />,<Adminn />]} />
          <Route path='/about' element={[<CommonNav />, <About />, <Foot />]} />
          <Route path='/contact' element={[<CommonNav />, <Contactus />, <Foot />]} />
          <Route path='/privacy' element={[<CommonNav />, <Privacypolicy />, <Foot />]} />
          <Route path='/terms' element={[<CommonNav />, <Terms />, <Foot />]} />
          <Route path='/feedback' element={[<CommonNav />, <Feedback />, <Foot />]} />
          <Route path='/saftey' element={[<CommonNav />, <Saftey />, <Foot />]} />




          {/* pages */}

          <Route path='/usernav' element={<UserNav />} />
          <Route path='/sellernav' element={<SellerNav />} />
          <Route path='/commonnav' element={<CommonNav />} />
          <Route path='/adminnav' element={<AdminNav />} />
          {/* user */}
          <Route path='/userprofile' element={[<UserNav />,<UserProfile />,<Foot />]} />
          <Route path='/orders' element={[<UserNav />,<Orders />,<Foot />]} />
          <Route path='/sellerlist' element={[<UserNav />,<SellersList />,<Foot />]} />
          <Route path='/usercart' element={[<UserNav />,<UserCart />,<Foot />]} />
          <Route path='/usermessage' element={[<UserNav />,<UserMesssage />,<Foot />]} />
          <Route path='/propertieslist' element={[<UserNav />,<PropertiesList />,<Foot />]} />
          {/* seller */}
          <Route path='/sellermessage' element={[<SellerNav />,<SellerMessage />,<Foot />]} />
          <Route path='/properties' element={[<SellerNav />,<Properties />,<Foot />]} />
          <Route path='/sellerprofile' element={[<SellerNav />,<SellerProfile />,<Foot />]} />
          <Route path='/userorder' element={[<SellerNav />,<UserOrders />,<Foot />]} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
