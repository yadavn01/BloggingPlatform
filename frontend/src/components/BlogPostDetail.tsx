import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';


interface BlogPost {
    id: number;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
}

const BlogPostDetail = () => {

    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>();
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchPost = async () => {
            const response =  await axios.get(`http://localhost:5194/api/blogposts/${id}`);
            console.log("response", response)
            setPost(response.data)
            setLoading(false);
        }
        fetchPost();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (!post) {
        return <Typography variant="h6">Post not found</Typography>;
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body1">
                {post.content}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                By {post.authorId} on {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
        </Container>

    );

}

export default BlogPostDetail;