// src/components/CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ addComment, postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment({ content, post_id: postId });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
