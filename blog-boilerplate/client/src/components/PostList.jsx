import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    useEffect( () => {
        fetchPosts();
    }, []); 

    console.log(posts);
    
    return <div></div>
}

export default PostList;