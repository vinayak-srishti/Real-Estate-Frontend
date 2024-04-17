import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes,Route} from "react-router-dom"
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




function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/User_login' element={[<Navs/>,<User_Login/>,<Foot/>]}/>
        <Route path='/seller_login' element={[<Navs/>,<Seller_login/>,<Foot/>]}/>
        <Route path='/reg' element={[<Navs/>,<Regis/>,<Foot/>]}/>
        <Route path='/seller_reg' element={[<Navs/>,<Seller_reg/>,<Foot/>]}/>
        <Route path='/whole' element={[<Navs/>,<Owlcarsol/>,<Body/>,<Foot/>]}/>
        <Route path='/Foot' element={<Foot/>}/>
        <Route path='/Nav' element={<Navs/>}/>
        <Route path='/Body' element={<Body/>}/>
        <Route path='/Owl' element={<Owlcarsol/>}/>
        <Route path='/admin' element={<Adminn/>}/>
        <Route path='/about' element={[<About/>,<Foot/>]}/>
        <Route path='/contact' element={[<Contactus/>,<Foot/>]}/>
        <Route path='/privacy' element={[<Privacypolicy/>,<Foot/>]}/>
        <Route path='/terms' element={[<Terms/>,<Foot/>]}/>
        <Route path='/feedback' element={[<Feedback/>,<Foot/>]}/>
        <Route path='/saftey' element={[<Saftey/>,<Foot/>]}/>
        
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
