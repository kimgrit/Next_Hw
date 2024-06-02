import React, { useState } from 'react';
import styles from './Write.module.css';

function Write({ title, content, list, setList }) {
    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleAddEntry = () => {
        if (newTitle.trim() && newContent.trim()) {
            const newEntry = {
                id: list.length, // Assign a new id
                title: newTitle,
                content: newContent,
            };
            setList([...list, newEntry]);
            setNewTitle('');
            setNewContent('');
            setShowForm(false);
        }
    };

    return (
        <div className={styles.Write}>
            <button className={styles.show} onClick={() => setShowForm(!showForm)}>
                🎧
            </button>
            {showForm && (
                <div>
                    <p>
                        <input
                            className={styles.title}
                            placeholder={title}
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        ></input>
                        <button type="button" onClick={handleAddEntry}>
                            등록
                        </button>
                    </p>

                    <p>
                        <input
                            className={styles.content}
                            placeholder={content}
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                        ></input>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Write;
