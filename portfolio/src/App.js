import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Repos from './pages/Repos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} /> 
        <Route path="/repos" element={<Repos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </Router>   
  );
}

export default App;