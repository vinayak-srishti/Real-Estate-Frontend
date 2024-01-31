import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserLogin from './components/UserLogin';
import { BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/Login' element={<UserLogin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
