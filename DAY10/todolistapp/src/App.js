import React, {useState} from "react";

import TodoTemplate from "./TodoTemplate";
import TodoRegist from "./TodoRegist";
import TodoList from "./TodoList";

function App() {
	//할일 목록 데이터 구조 정의 및 초기값 할당하기
	//풀스택 개발자 되기 할일 목록 데이터 정의
	const [todos, setTodos] = useState([
		{id: 1, text: "벡엔드 기술 습득하기", desc: "node.js,express,mvc", checked: false},
		{id: 2, text: "클라우드 기술 습득하기", desc: "devops,iaas,paas,faas,caas,aws..", checked: false},
		{id: 3, text: "프론트엔드 기술 습득하기", desc: "html,css,react,cra,next.js", checked: false},
	]);

	//완료안한일 체크 부분
	const notcheckedCount = todos.filter((todo) => todo.checked).length;

	//완료한일 체크 부분
	const checkedCount = todos.filter((todo) => !todo.checked).length;

	//할일고유번호 데이터 정의 및 초기값할당=원시타입정의
	const [nextId, setNextId] = useState(4);

	//할일등록 처리 이벤트 처리함수 정의
	//처리해야할 데이터가 존재하는 컴포넌트에서 이벤트처리함수를 정의하고 자식요소로 props를 통해 전달할 수 있다.
	//자식요소에서는 전달된 이벤트 함수를 실행시킬수 있고 해당함수는 결국 부모 컴포넌트의 데이터를 변경하게된다.
	const onInsert = (text, desc) => {
		// setTodos(...todos, {id: 0, text: text, desc: desc, checked: false});

		//할일목록 데이터에 신규할일 데이터 추가
		setTodos(todos.concat({id: todos.length + 1, text: text, desc: desc, checked: false}));

		//다음 채번번호 증가처리
		setNextId(nextId + 1);
	};

	//특정 단일 할일정보 삭제처리 함수 정의

	const onRemove = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	//특정 할일정보 체크박스 선택시 상태변경 처리함수 정의
	//클릭한 특정 할일의 체크박스에 바인딩된 개별 데이터객체의 checked 속성의 값을 변경해주는 기능제공
	const onSelect = (id) => {
		//할일 목록안에 특정 단일아이템의 값을 바꾸는것
		setTodos(todos.map((todo) => (todo.id === id ? {...todo, checked: !todo.checked} : todo)));
	};

	return (
		<div className="App" style={{margin: "0 auto", width: "50%", textAlign: "justify"}}>
			<h1>총할일건수 : {todos.length} 건</h1>
			<h3>미완료한건수 : {notcheckedCount} 건</h3>
			<h3>완료한건수 : {checkedCount} 건</h3>
			<TodoTemplate>
				{/* 부모에서 정의된 함수(이벤트핸들러함수)도 props방식으로 자식요소에 전달이 가능하다. */}
				<TodoRegist onInsert={onInsert}></TodoRegist>
				<TodoList todos={todos} onRemove={onRemove} onSelect={onSelect}></TodoList>
			</TodoTemplate>
		</div>
	);
}

export default App;
