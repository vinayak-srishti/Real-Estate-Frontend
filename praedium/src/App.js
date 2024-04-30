// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User_Login from "./components/User_Login.js";
import Foot from "./components/Foot.js";
// import Body from "./components/Body.js";
// import Owlcarsol from './components/Owlcarsol.js';
import Regis from "./components/Regis.js";
import Seller_login from "./components/Seller_login.js";
import Seller_reg from "./components/Seller_reg.js";
import Adminn from "./components/Adminn.js";
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Privacypolicy from "./components/Privacypolicy.js";
import Terms from "./components/Terms.js";
import Feedback from "./components/Feedback.js";
import Saftey from "./components/Saftey.js";
import UserNav from "./components/Nav/UserNav.js";
import SellerNav from "./components/Nav/SellerNav.js";
import CommonNav from "./components/Nav/CommonNav.js";
import AdminNav from "./components/Nav/AdminNav.js";
import UserProfile from "./components/User/UserProfile.js";
import UserOrders from "./components/seller/UserOrders.js";
import SellerVeiwChat from "./components/seller/SellerVeiwChat.js";
import Orders from "./components/User/Orders.js";
import SellersList from "./components/User/SellersList.js";
import UserCart from "./components/User/UserCart.js";
import UserMesssage from "./components/User/UserMesssage.js";
import PropertiesList from "./components/User/PropertiesList.js";
import SellerMessage from "./components/seller/SellerMessage.js";
import Properties from "./components/seller/Properties.js";
import SellerProfile from "./components/seller/SellerProfile.js";
import SellerForgot from "./components/seller/SellerForgot.js";
import UserForgot from "./components/User/UserForgot.js";
import SellerAddProperty from "./components/seller/SellerAddProperty.js";
import SellerEditProfile from "./components/seller/SellerEditProfile.js";
import UserHomePage from "./components/User/UserHomePage.js";
import LandingPage from "./components/LandingPage.js";
import UserEditProfile from "./components/User/UserEditProfile.js";
import SellerHomePage from "./components/seller/SellerHomePage.js";
import Paymentform from "./components/User/Paymentform.js";
import BuyerPropertyBasedMessage from "./components/User/BuyerPropertyBasedMessage.js";
import AdminLogin from "./components/Admin/AdminLogin.js";
import OrderList from "./components/Admin/OrderList.js";
import UserList from "./components/Admin/UserList.js";
import AdminHome from "./components/Admin/AdminHome.js";

function App() {
  const url = "http://localhost:8081/";

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/User_login"
            element={[<CommonNav />, <User_Login />, <Foot />]}
          />
          <Route
            path="/seller_login"
            element={[<CommonNav />, <Seller_login />, <Foot />]}
          />
          <Route path="/reg" element={[<CommonNav />, <Regis />, <Foot />]} />
          <Route
            path="/seller_reg"
            element={[<CommonNav />, <Seller_reg />, <Foot />]}
          />

          {/* <Route path='/Body' element={<Body/>}/> */}
          {/* <Route path='/Owl' element={<Owlcarsol/>}/> */}
          {/* <Route path='/whole' element={[<CommonNav />, <Owlcarsol />, <Body />, <Foot />]} /> */}

          <Route path="/admin" element={[<AdminNav />, <AdminLogin />]} />
          <Route
            path="/sellerslist"
            element={[<AdminNav />, <SellersList url={url} />]}
          />
          <Route
            path="/orderlist"
            element={[<AdminNav />, <OrderList url={url} />]}
          />
          <Route
            path="/userslist"
            element={[<AdminNav />, <UserList url={url} />]}
          />
          <Route
            path="/propertylist"
            element={[<AdminNav />, <PropertiesList url={url} />]}
          />

          <Route path="/about" element={[<CommonNav />, <About />, <Foot />]} />
          <Route
            path="/contact"
            element={[<CommonNav />, <Contactus />, <Foot />]}
          />
          <Route
            path="/privacy"
            element={[<CommonNav />, <Privacypolicy />, <Foot />]}
          />
          <Route path="/terms" element={[<CommonNav />, <Terms />, <Foot />]} />
          <Route
            path="/feedback"
            element={[<CommonNav />, <Feedback />, <Foot />]}
          />
          <Route
            path="/saftey"
            element={[<CommonNav />, <Saftey />, <Foot />]}
          />
          <Route
            path="/sellerforgot"
            element={[<CommonNav />, <SellerForgot />, <Foot />]}
          />
          <Route
            path="/userforgot"
            element={[<CommonNav />, <UserForgot />, <Foot />]}
          />

          {/* pages */}
          <Route
            path="/"
            element={[<CommonNav />, <LandingPage />, <Foot />]}
          />
          <Route path="/usernav" element={<UserNav url={url} />} />
          <Route path="/sellernav" element={<SellerNav url={url} />} />
          <Route path="/commonnav" element={<CommonNav />} />
          <Route path="/adminnav" element={<AdminNav />} />

          {/* user */}
          <Route
            path="/userprofile"
            element={[
              <UserNav url={url} />,
              <UserProfile url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/orders"
            element={[<UserNav url={url} />, <Orders url={url} />, <Foot />]}
          />
          <Route
            path="/sellerlist"
            element={[
              <UserNav url={url} />,
              <SellersList url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/usercart"
            element={[<UserNav url={url} />, <UserCart />, <Foot />]}
          />
          <Route
            path="/usermessage"
            element={[
              <UserNav url={url} />,
              <UserMesssage url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/propertieslist"
            element={[
              <UserNav url={url} />,
              <PropertiesList url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/payment/:id"
            element={[<UserNav url={url} />, <Paymentform />, <Foot />]}
          />

          {/* seller */}
          <Route
            path="/sellermessage"
            element={[
              <SellerNav url={url} />,
              <SellerMessage url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/properties"
            element={[
              <SellerNav url={url} />,
              <Properties url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/sellerprofile/:id"
            element={[
              <SellerNav url={url} />,
              <SellerProfile url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/sellerorder"
            element={[
              <SellerNav url={url} />,
              <UserOrders url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/addproperty"
            element={[
              <SellerNav url={url} />,
              <SellerAddProperty url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/sellereditprofile/:id"
            element={[
              <SellerNav url={url} />,
              <SellerEditProfile url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/userhome"
            element={[
              <UserNav url={url} />,
              <UserHomePage url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/usereditprofile/:id"
            element={[
              <UserNav url={url} />,
              <UserEditProfile url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/sellerhome"
            element={[
              <SellerNav url={url} />,
              <SellerHomePage url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/buyerPropertyBasedMessage/:id"
            element={[
              <UserNav url={url} />,
              <BuyerPropertyBasedMessage url={url} />,
              <Foot />,
            ]}
          />
          <Route
            path="/sellerVeiwChat/:id"
            element={[
              <SellerNav url={url} />,
              <SellerVeiwChat url={url} />,
              <Foot />,
            ]}
          />

          <Route
            path="/adminDashboard"
            element={[<AdminNav url={url} />, <AdminHome url={url}/>, <Foot />]}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
