import React, {useState, useRef} from "react";

//redux전역데이터 공간에 데이터를 반영하려면 useDispatch라는 훅을 참조합니다.
import {useDispatch} from "react-redux";

//redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
import {addTodoCount} from "../redux/actions";

const TodoList = () => {
	//전역 데이터 반영을 위한 useDispatch 훅 변수 생성하기
	const globalDispatch = useDispatch();

	const ref = useRef();

	//단일할일 정보 구조정의
	const [todo, setTodo] = useState({title: "", orderby: 0});

	//할일 목록 데이터 구조정의
	const [todoList, setTodoList] = useState([]);

	const handleTodo = (e) => {
		setTodo({...todo, [e.target.name]: e.target.value});
	};

	const handleAddTodo = () => {
		setTodoList([...todoList, todo]);

		//전역 데이터 공간에 총 할일 건수 전역데이터 반영하기 = globalDispatch
		//globalDispatch(액션함수호출);
		globalDispatch(addTodoCount(todoList.length + 1));

		ref.current.focus();
	};

	return (
		<div>
			<h1>할일 정보 페이지</h1>
			할일: <input name="title" ref={ref} value={todo.title} onChange={handleTodo} /> <br />
			우선순위: <input name="orderby" value={todo.orderby} onChange={handleTodo} /> <br />
			<button onClick={handleAddTodo}>추가</button>
			<hr></hr>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						{item.orderby} : {item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
