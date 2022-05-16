import { useEffect, useState } from 'react';

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // React-Test-Async-Component-Replacing-Real-Fetch-Request-With-Mock
        // This fetch function will be overridden with dummy fetch data in
        // "Async.test.js".
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