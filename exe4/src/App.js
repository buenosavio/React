import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import User from './pages/User';
import Home from './pages/Home';
import LoginProvider from './context/LoginContext';
import Address from './pages/Address';
import CreateUser from './pages/CreateUser';
import UserProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginProvider>
          <UserProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/user' element={<User />} />
              <Route path='/address' element={<Address/>} />
              <Route path='create-user' element={<CreateUser/>}>
                <Route path=':id' element={<CreateUser/>} />
              </Route>
            </Routes>
          </UserProvider>
        </LoginProvider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
