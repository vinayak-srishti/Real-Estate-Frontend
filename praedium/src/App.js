import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import User_Login from './components/User_Login.js';
import Nav from './components/Nav.js'
import Foot from './components/Foot.js'
import Body from './components/Body.js'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/User_login' element={[<Nav/>,<Body/>,<Foot/>]}/>
        <Route path='/Nav' element={<Nav/>}/>
        <Route path='/Foot' element={<Foot/>}/>
        <Route path='/Body' element={<Body/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
