let todos = [];

function addTodo() {
  const input = document.getElementById('newTodo'); // 입력창 가져오기
  const text = input.value.trim(); // 입력값에서 공백 제거

  if (text === '') return; // 값이 없으면 추가 안 함

  todos.push(text); // 할 일 배열에 추가
  input.value = ''; // 입력창 reset
  renderTodos(); // 전체 목록 다시 렌더링
}

// 엔터 키로도 할 일을 추가할 수 있도록 처리
function handleEnterKey() {
  if (window.event.keyCode === 13) {
    addTodo();
  }
}

// 특정 인덱스의 할 일 삭제
function deleteTodo(index) {
  todos.splice(index, 1); // 해당 인덱스 요소를 배열에서 제거
  renderTodos(); // 전체 목록 다시 렌더링
}

// 할 일 목록을 HTML에 렌더링
function renderTodos() {
  const ul = document.getElementById('todoList'); // ul 요소 가져오기
  ul.innerHTML = ''; // 기존 목록 초기화

  todos.forEach((todoText, index) => {
    const li = document.createElement('li'); // li 생성
    li.className = 'todo'; // 테스트용 클래스 추가

    const span = document.createElement('span'); // 할 일 텍스트 표시용 span
    span.textContent = todoText;

    const deleteButton = document.createElement('button'); // 삭제 버튼 생성
    deleteButton.textContent = '삭제'; // 버튼 텍스트
    deleteButton.onclick = () => deleteTodo(index); // 삭제 클릭 시 해당 인덱스 제거

    li.appendChild(span); // li에 span 추가
    li.appendChild(deleteButton); // li에 버튼 추가

    ul.appendChild(li); // ul에 li 추가
  });
}
