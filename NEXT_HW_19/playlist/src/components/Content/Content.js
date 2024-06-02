import React from 'react';
import styles from './Content.module.css';

function Content({ selectedItem }) {
    return (
        <div className={styles.contents}>
            {selectedItem && (
                <div>
                    <h2 className={styles.title}>{selectedItem.title}</h2>
                    <p className={styles.content}>{selectedItem.content}</p>
                </div>
            )}
        </div>
    );
}

export default Content;
