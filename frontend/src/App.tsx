import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';


const App: React.FC = () => {

  return (
    <Router>
      <div>
        <h2>Blogging Platform</h2>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
