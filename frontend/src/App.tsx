import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import NavBar from './components/Navbar/Navbar';
import Homepage from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import SignUp from './pages/Signup'; // Assuming you have Signup.tsx for your signup form
import VenuePage from './pages/Venues/Venues';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path="/venues" element={<VenuePage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
