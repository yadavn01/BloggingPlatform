import { useState } from "react";
import axios from "axios";


const CreateBlogPost = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5194/api/blogposts', { title, content });
        console.log('Blog post created:', response.data);
    }

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
        </div>
        </form>
    )
}
export default CreateBlogPost;