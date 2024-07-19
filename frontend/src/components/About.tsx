import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Emoji from './Icons/Emoji';

const About: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <div className="about">
                        <div className="heading">
                            <Typography variant="h3" component="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                Hi, I'm Naman
                                <Emoji symbol="👋" label="Wave hello!" />
                            </Typography>
                        </div>
                        <div className="prompt" style={{ marginTop: '16px' }}>
                            <Typography variant="body1">
                                A Full stack developer with a passion for learning and creating.
                            </Typography>
                        </div>
                    </div>
                    <img
                        src="https://via.placeholder.com/600x200"
                        alt="Blogging Platform"
                        style={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
                    />
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Welcome to the Blogging Platform! Our mission is to provide a user-friendly and dynamic space for bloggers to share their thoughts,
                     ideas, and stories with the world. 
                    Whether you're a seasoned writer or just starting, our platform offers the tools and features you need to create and manage your blog with ease.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Here, you can connect with a community of like-minded individuals, explore diverse topics, and engage in meaningful discussions.
                     Our intuitive interface ensures that you can focus on your content while we handle the technical aspects.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Join us on this exciting journey and start your blogging adventure today. Happy blogging!
                </Typography>
            </Paper>
        </Container>
    );
};

export default About;
