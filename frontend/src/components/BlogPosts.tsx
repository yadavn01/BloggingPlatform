import { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
    id: number;
    title: string;
    content: string;
    // Add other properties as needed
  }

const BlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5194/api/blogposts');
            setPosts(response.data)
        }
        fetchPosts();    
    },[])

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <h3>{post.content}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogPosts;