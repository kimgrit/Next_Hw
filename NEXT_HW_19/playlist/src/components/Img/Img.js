import React from 'react';
import styles from './Img.module.css';

function Img() {
    return (
        <div className={styles.album}>
            <div className={styles.triangle}></div>
            <img
                className={styles.img}
                src="https://kr.ktown4u.com/goods_files/SH0164/goods_images/000079/GD00078786.default.1.png"
                alt="image"
            ></img>
            <p>초록을 거머쥔 우리는 - 잔나비</p>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Poor+Story&display=swap');
            </style>
        </div>
    );
}
export default Img;
