import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Write from './components/Write/Write';
import Img from './components/Img/Img';

function App() {
    const [list, setList] = useState([
        {
            id: 0,
            title: '2023/11/02',
            content: '홍대버스킹사람들이 스쳐 지나갈 때 들으면 좋은 노래였다. 군중 속 고독마냥!',
        },
    ]);
    const [selectedItem, setSelectedItem] = useState(null);

    const title = '빈 제목';
    const content = '당신의 감상을 자유롭게 기록하세요';

    const handleDeleteEntry = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
        if (selectedItem && selectedItem.id === id) {
            setSelectedItem(null);
        }
    };

    return (
        <>
            <body>
                <header>
                    <h1>Music Diary</h1>
                </header>
                <div className="main-box">
                    <div className="left-box">
                        <Img></Img>
                    </div>
                    <div className="right-box">
                        <Nav list={list} setSelectedItem={setSelectedItem} handleDeleteEntry={handleDeleteEntry}></Nav>
                        <Content selectedItem={selectedItem}></Content>
                    </div>
                </div>
                <div className="Write-box">
                    <Write title={title} content={content} list={list} setList={setList}></Write>
                </div>
            </body>
        </>
    );
}

export default App;
