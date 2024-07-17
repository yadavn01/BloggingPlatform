import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';


const CreateBlogPost = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            console.log("hitting api post req");
            try {
                const response = await axios.post('http://localhost:5194/api/blogposts', 
                    { title, content },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log('Blog post created:', response.data);
                setMessage('Blog post created successfully!');
            } catch (error) {
                console.error('Error creating blog post:', error);
                setMessage('Failed to create blog post.');
            }
        } else {
            console.log('No token found');
            setMessage('No token found.');
        }
    };

    return (
        <Container maxWidth="sm">
             <Box sx={{ mt: 4 }}> 
        <form onSubmit={handleSubmit}>
        <div>
        <div>
                <label>Title</label>
                
                <TextField type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
                required />
            </div>

            <div>
                <label>Content</label>
                <TextField value={content} onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
                required />
            </div>
            <div>
            <Button type="submit">Submit</Button>
            </div>
        </div>
        {message && <p>{message}</p>}
        </form>
        </Box>
        </Container>
    )
}
export default CreateBlogPost;