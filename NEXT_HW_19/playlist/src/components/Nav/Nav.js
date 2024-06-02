import React from 'react';
import styles from './Nav.module.css';

function Nav({ list, setSelectedItem, handleDeleteEntry }) {
    return (
        <nav>
            <ul className={styles.list}>
                {list.map((item) => (
                    <ui key={item.id}>
                        <span>🎵</span>
                        <a href="#" onClick={() => setSelectedItem(item)}>
                            <span>{item.title}</span>
                        </a>
                        <button className={styles.Button} onClick={() => handleDeleteEntry(item.id)}>
                            X
                        </button>
                        <br />
                    </ui>
                ))}
            </ul>
        </nav>
    );
}
export default Nav;
