import { useEffect, useState } from 'react';

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // React-Test-Async-Component-Replacing-Real-Fetch-Request-With-Mock
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Async;