import React, {useState, useEffect, useRef, useCallback, useContext} from "react";

//전역 컨텍스트 참조하기
import {AppContext} from "../App";

//전역 데이터 값을 조회하고 반환하는 함수 정의
function useTodoCountState() {
	const value = useContext(AppContext);
	return value;
}

const TodoList = () => {
	const refTitle = useRef(null);

	//전역 데이터 카운터 상태값을 관리해주는 개발자 정의 훅을 이용한 데이터제어 하기
	//전역 데이터 상태값을 관리해주는 useState() 개발자 정의 훅 구현
	//전역데이터를 Setter함수로 해당 컴포넌트에서 관리해주기 위한 전욕 훅 정의
	const [, setTodoCount] = useTodoCountState();

	const [todo, setTodo] = useState({
		title: "",
		contents: "",
		orderby: 0,
	});

	//할일데이터 목록
	const [todoList, setTodoList] = useState([]);

	//최초 컴포넌트가 마운팅될때를 감지해서 제목입력박스에 포커스를 맞춘다.
	useEffect(() => {
		refTitle.current.focus();
	}, []);

	const onTodoChange = useCallback(
		(e) => {
			setTodo({...todo, [e.target.name]: e.target.value});
		},
		[todo]
	);

	//할일 추가하기
	const onAdd = useCallback(() => {
		setTodoList([...todoList, todo]);
		// setTodoList(todoList.concat(todo));
		setTodo({
			title: "",
			contents: "",
			orderby: 0,
		});

		refTitle.current.focus();

		//전역데이터 값 변경처리하기
		setTodoCount(() => todoList.length + 1);
	}, [todo, todoList]);

	return (
		<div>
			<h1>TodoList 관리자</h1>
			할일 제목:
			<input ref={refTitle} name="title" value={todo.title} onChange={onTodoChange} /> <br />
			할일 내용:
			<input name="contents" value={todo.contents} onChange={onTodoChange} /> <br />
			우선 순위:
			<input name="orderby" value={todo.orderby} onChange={onTodoChange} /> <br />
			<button onClick={onAdd}>추가</button>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						{item.title}--{item.contents}--{item.orderby}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
