import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Emoji from './Icons/Emoji';
import TicTacToeAnimation from './AnimatedObject';

const About: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {/* <Paper elevation={5} sx={{ p: 4, borderRadius: '16px' }}> */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about">
                            <div className="heading">
                                <Typography variant="h3" component="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Hi, I'm Naman
                                    <Emoji symbol="👋" label="Wave hello!" />
                                </Typography>
                            </div>
                            <div className="subtitle1" style={{ marginTop: '16px' }}>
                                <Typography variant="h6" sx={{}}>
                                    A Full stack developer with a passion for learning and creating.
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                    <Box sx={{ mt: 4 }}>
                    <TicTacToeAnimation />
                    </Box>
                    {/* <motion.img
                    
                        src="https://via.placeholder.com/600x200"
                        alt="Blogging Platform"
                        style={{ width: '100%', borderRadius: '16px', marginTop: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    /> */}
                </Box>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="subtitle1">
                    <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Welcome to my little corner of the internet! Expect to find random thoughts on my past projects and current experiments. 
                    
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Feeling chatty? Want to join the fun? Just register or log in and unleash your inner blogger!
                    </Typography>
                    </div>
                </motion.div>


               
            {/* </Paper> */}
        </Container>
    );
};

export default About;
