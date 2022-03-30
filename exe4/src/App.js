import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import User from './pages/User';
import Home from './pages/Home';
import LoginProvider from './context/LoginContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
