import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import NavBar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreateBlogPost from './components/CreateBlogPost';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './AuthContext';
import About from './components/About';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});


const App: React.FC = () => {

  
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
    <div className="app-container">
        <NavBar />
        <div className="content-wrap">
        <Routes>
          <Route path="/" element={<BlogPosts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/create-blogposts" element={<ProtectedRoute element={<CreateBlogPost />} />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
