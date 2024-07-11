import { useState } from "react";
import axios from "axios";


const CreateBlogPost = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
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
        <form onSubmit={handleSubmit}>
        <div>
        <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label>Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
        </div>
        </form>
    )
}
export default CreateBlogPost;