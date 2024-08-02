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
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {

    const { token } = useAuth();

    useEffect(() => {
        console.log('Token in NavBar:', token);
    }, [token]);

    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <SentimentSatisfiedAltIcon />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                <Button color="inherit" component={RouterLink} to="/about">
                        About
                    </Button>

                </motion.div>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    <Button color="inherit" component={RouterLink} to="/blogposts">
                        Blog
                    </Button>
                    </motion.div>

                  
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    {token === null ? (
                        <Button variant="outlined" color="inherit" component={RouterLink} to="/login">
                            Log In
                        </Button>
                    ) : (
                        <Button variant="outlined" color="inherit" component={RouterLink} to="/logout">
                            Log Out
                        </Button>
                    )}
                    </motion.div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
