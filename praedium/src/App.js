import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import User_Login from './components/User_Login.js';
import Nav from './components/Nav.js'
import Foot from './components/Foot.js'
import Body from './components/Body.js'
import Owlcarsol from './components/Owlcarsol.js';
import Regis from './components/Regis.js';
import Seller_login from './components/Seller_login.js';
import Seller_reg from './Seller_reg.js';
import Adminn from './components/Adminn.js';




function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/User_login' element={[<Nav/>,<User_Login/>,<Foot/>]}/>
        <Route path='/seller_login' element={[<Nav/>,<Seller_login/>,<Foot/>]}/>
        <Route path='/reg' element={[<Nav/>,<Regis/>,<Foot/>]}/>
        <Route path='/seller_reg' element={[<Nav/>,<Seller_reg/>,<Foot/>]}/>
        <Route path='/whole' element={[<Nav/>,<Owlcarsol/>,<Body/>,<Foot/>]}/>
        <Route path='/Nav' element={<Nav/>}/>
        <Route path='/Foot' element={<Foot/>}/>
        <Route path='/Body' element={<Body/>}/>
        <Route path='/Owl' element={<Owlcarsol/>}/>
        <Route path='/admin' element={<Adminn/>}/>
        
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
