import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

const NavBar: React.FC = () => {

    const token = localStorage.getItem('token');

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Blogging Platform
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={RouterLink} to="/blogposts">
                        Blog
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/contact">
                        Contact
                    </Button>
                    {
                        !token ? (<Button variant="outlined" color="inherit" component={RouterLink} to="/login">
                            Log In
                        </Button>) :
                            (<Button variant="outlined" color="inherit" component={RouterLink} to="/logout">
                                Log Out
                            </Button>)
                    }
                    {/* {!token && (
                        <Button variant="contained" color="primary" component={RouterLink} to="/register">
                            Register
                        </Button>
                    )} */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
