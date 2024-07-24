// Footer.tsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    My Blogging Site
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Follow us on social media!
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="#" sx={{ mx: 1 }}>Facebook</Link>
                    <Link href="#" sx={{ mx: 1 }}>Twitter</Link>
                    <Link href="#" sx={{ mx: 1 }}>Instagram</Link>
                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 3 }}
                >
                    {'© '}
                    {new Date().getFullYear()}
                    {' My Blogging Site. All rights reserved.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
