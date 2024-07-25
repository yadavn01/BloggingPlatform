// Footer.tsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    This website is built with <i className="devicon-react-original"></i>
                    <i className="devicon-typescript-plain"></i>
                    <i className="devicon-dotnetcore-plain"></i>

                    <i className="devicon-docker-plain"></i>

                    <i className="devicon-github-original"></i>
                </Typography>
              
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="https://github.com/yadavn01" sx={{ mx: 2, fontSize: 30 }}>
            <i className="devicon-github-original"></i>
          </Link>
                    <Link href="https://www.linkedin.com/in/namanyd/" sx={{ mx: 2, fontSize: 30 }}>
            <i className="devicon-linkedin-plain"></i>
          </Link>
                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 3 }}
                >
                    {'© '}
                    {new Date().getFullYear()}
                    {' Naman Yadav, Ynaman29@gmail.com. All rights reserved.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
