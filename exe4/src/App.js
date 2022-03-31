import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import User from './pages/User';
import Home from './pages/Home';
import LoginProvider from './context/LoginContext';
import Address from './pages/Address';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
            <Route path='/address' element={<Address/>} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
