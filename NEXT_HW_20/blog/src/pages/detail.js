import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';

const Detail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const newUrlRef = useRef(null);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setPost(storedPosts[id]);
        setComments(storedComments.filter((comment) => comment.post_id === id));
    }, [id]);

    const addComment = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(
            'comments',
            JSON.stringify([...JSON.parse(localStorage.getItem('comments') || '[]'), newComment])
        );
    };

    const startEditing = (index) => {
        setEditingIndex(index);
    };

    const saveNewUrl = () => {
        const newUrl = newUrlRef.current.value;
        const updatedPost = { ...post };
        updatedPost.pictures[editingIndex] = newUrl;
        setPost(updatedPost);

        const updatedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        updatedPosts[id] = updatedPost;
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        setEditingIndex(null);
    };

    useEffect(() => {
        if (editingIndex !== null && newUrlRef.current) {
            newUrlRef.current.value = post.pictures[editingIndex];
        }
    }, [editingIndex]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p style={{ margin: '30px' }}>{post.content}</p>
                    <div>
                        {post.pictures.map((pic, idx) => (
                            <div key={idx} style={{ marginBottom: '10px' }}>
                                <img
                                    src={pic}
                                    alt="Detail"
                                    style={{ width: '350px', margin: '20px', cursor: 'pointer' }}
                                    onClick={() => startEditing(idx)}
                                />
                                {editingIndex === idx && (
                                    <div>
                                        <input type="url" ref={newUrlRef} defaultValue={pic} />
                                        <button onClick={saveNewUrl}>Save</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <CommentForm addComment={addComment} postId={id} />
                    <h3>Comments</h3>
                    <div>
                        {comments.map((comment, index) => (
                            <div key={index}>
                                <p style={{ margin: '30px' }}>
                                    <li>{comment.content}</li>
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Detail;
