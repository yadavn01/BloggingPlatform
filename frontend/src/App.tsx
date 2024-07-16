import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import NavBar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreateBlogPost from './components/CreateBlogPost';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <div>
        <h2>Blogging Platform</h2>
        <NavBar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/create-blogposts" element={<CreateBlogPost />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
