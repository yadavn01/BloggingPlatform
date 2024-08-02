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
import { Box, FormControlLabel, IconButton, PaletteMode, Switch, useMediaQuery } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BlogPostDetail from './components/BlogPostDetail';




const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  
  const handleToggle = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );
  
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
    <div className="app-container">
        <NavBar />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                {
                  <IconButton sx={{ ml: 1 }} onClick={handleToggle} color="inherit">
                  {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
                </IconButton>
                }
            </Box>
        <div className="content-wrap">
        <Routes>
          <Route path="/" element={<BlogPosts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/posts/:id" element={<BlogPostDetail />} />
          <Route path="/create-blogposts" element={<ProtectedRoute element={<CreateBlogPost />} />} />
        </Routes>
        </div>
        <Footer />
        {/* <AnimatedBackground /> */}
      </div>
    </Router>
    </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
