import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostForm from '../components/PostForm';

const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const addPost = (newPost) => {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const deletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    return (
        <div>
            <h1> 공간 저장소 . </h1>
            <h3>Remember your own place and memory</h3>

            <PostForm addPost={addPost} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <div>
                            {post.pictures.map((pic, idx) => (
                                <img key={idx} src={pic} alt="Post" style={{ width: '100px', height: '100px' }} />
                            ))}
                        </div>
                        <Link class="link" to={`/detail/${index}`}>
                            ↳ 이 공간에 대해서 더 읽어볼까요?
                        </Link>

                        <button onClick={() => deletePost(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
