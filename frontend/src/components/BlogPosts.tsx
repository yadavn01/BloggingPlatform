import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "../AuthContext";
import { formatBlogBody } from "../utilities/formatBlogBody";
import { motion } from 'framer-motion';

interface BlogPost {
    id: number;
    title: string;
    content: string;
}

const BlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { token } = useAuth();

    useEffect(() => {
        console.log('Token in blogpost:', token);
    }, [token]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5194/api/blogposts');
            console.log("response", response)
            setPosts(response.data.result)
            setLoading(false);
        }
        fetchPosts();
    }, [])

    return (
        <>
            <Container sx={{ width: '85%', mb: 4, mt: 2 }}>
                {loading ? (<CircularProgress />) :
                    (
                        <div>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Posts
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                                <Button type="button" component={RouterLink} to="/create-blogposts">
                                    Create Blog
                                </Button>
                                <Button type="button" component={RouterLink} to="/profile">
                                    Profile
                                </Button>
                            </Box>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    {posts.map(post => (
                                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Card sx={{ height: '100%' }}>
                                                    <CardContent>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            Blog Post
                                                        </Typography>
                                                        <Typography variant="h5" component="div">
                                                            {formatBlogBody(post.title)}
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            {formatBlogBody(post.content)}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small" component={RouterLink} to={`/posts/${post.id}`}>Learn More</Button>
                                                    </CardActions>
                                                </Card>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>

                        </div>)
                }
            </Container>
        </>
    )
}

export default BlogPosts;
