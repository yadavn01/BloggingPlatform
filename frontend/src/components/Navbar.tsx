import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from '../AuthContext';

const NavBar: React.FC = () => {

    const { token } = useAuth();

    useEffect(() => {
        console.log('Token in NavBar:', token);
    }, [token]);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <SentimentSatisfiedAltIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                <Button color="inherit" component={RouterLink} to="/about">
                        About
                    </Button>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={RouterLink} to="/blogposts">
                        Blog
                    </Button>
                    {token === null ? (
                        <Button variant="outlined" color="inherit" component={RouterLink} to="/login">
                            Log In
                        </Button>
                    ) : (
                        <Button variant="outlined" color="inherit" component={RouterLink} to="/logout">
                            Log Out
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
