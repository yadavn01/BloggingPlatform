import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "../AuthContext";

interface BlogPost {
    id: number;
    title: string;
    content: string;
    // Add other properties as needed
  }

const BlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const {token} = useAuth();
    
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
    },[])

    return (
        <Container maxWidth="sm">
             <Box sx={{ mt: 4 }}> 
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
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <h3>{post.content}</h3>
                    </li>
                ))}
            </ul>
        </div>)
        }
        </Box>
        </Container>
    )
}

export default BlogPosts;