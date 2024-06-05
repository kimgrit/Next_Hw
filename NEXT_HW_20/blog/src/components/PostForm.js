import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pictures, setPictures] = useState(['', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, content, pictures });
        setTitle('');
        setContent('');
        setPictures(['', '', '']);
    };

    const handlePictureChange = (index, value) => {
        const newPictures = [...pictures];
        newPictures[index] = value;
        setPictures(newPictures);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>💬 어느 장소인가요?</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>💬 왜 기억하고 싶나요?</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <div>
                {pictures.map((pic, idx) => (
                    <div key={idx}>
                        <label>Pic Link{idx + 1}:</label>
                        <input type="url" value={pic} onChange={(e) => handlePictureChange(idx, e.target.value)} />
                    </div>
                ))}
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
