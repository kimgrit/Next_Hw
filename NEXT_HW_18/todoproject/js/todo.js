const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const submitBtn = document.querySelector('.submitBtn');

const content = []; // 빈 배열 선언
const Todo_key = 'todos'; // 로컬 스토리지에 저장할 때 사용할 키 값

// 로컬 스토리지에서 기존 투두 리스트를 불러와서 화면에 표시(가져온 문자열 -> 배열로)
const savedTodos = JSON.parse(localStorage.getItem(Todo_key)) || [];
savedTodos.forEach(paintTodo); // 위 배열을 순회하면서 모두 돈다

// 입력받은 투두리스트 추가
function submitAddTodo(event) {
    event.preventDefault(); // 새로고침 방지
    const text = document.getElementById('content');
    const todo = text.value.trim(); // 값 읽어오기 및 공백 제거
    if (todo === '') return; // 값이 없으면 종료

    const newTodo = { text: todo, id: Date.now() }; //id를 지정해서 고유성 부여
    content.push(newTodo); // 배열에 추가
    saveTodos(); // 로컬 스토리지에 저장
    text.value = ''; // 입력 필드 초기화
    paintTodo(newTodo); // 화면에 표시
}

todoForm.addEventListener('submit', submitAddTodo);

function paintTodo(todo) {
    // 새로 만들어질 태그들
    const li = document.createElement('li');
    li.id = todo.id; // 각 아이템에 고유 ID 설정
    const span = document.createElement('span');
    span.innerText = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    // 삭제 버튼 클릭 시 알림창 + 삭제 함수 실행
    deleteBtn.addEventListener('click', (event) => {
        alert('삭제하였습니다');
        deleteTodo(event);
    });

    // 계층구조 맞추기
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove(); // DOM에서 삭제

    // content 배열에서 삭제된 항목 제거 및 로컬 스토리지 업데이트
    const updatedContent = content.filter((todo) => todo.id !== parseInt(li.id));
    localStorage.setItem(Todo_key, JSON.stringify(updatedContent));
}

function saveTodos() {
    // JSON을 통해 배열을 문자열 형태로 변환하여 스토리지에 저장
    localStorage.setItem(Todo_key, JSON.stringify(content));
}
