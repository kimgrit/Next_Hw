const username = document.querySelector('.username');
const usernameWrapper = document.querySelector('.usernameWrapper');
const header = document.querySelector('#header');

function checkUsername() {
    const checkname = window.localStorage.getItem('username');
    if (checkname) {
        usernameWrapper.style.display = 'none';
        header.innerHTML = `<h1> ${window.localStorage.getItem(
            'username'
        )}의 TodoList</h1><button type ="button" onclick="resetUsername()">초기화</button>`; //header 보이기
    } else {
        usernameWrapper.style.display = 'flex'; //입력 받아야 할 때 보이게 하기.
        header.innerHTML = '';
    }
}
checkUsername(); //username 처리하는 로직을 항상 유지한다.

function setUsername() {
    const name = username.value; //값 읽어오기
    window.localStorage.setItem('username', name); //스토리지에 저장하기
    username.value = '';
    checkUsername();
}

function resetUsername() {
    window.localStorage.removeItem('username');
    console.log('username 초기화');
    checkUsername();
}
