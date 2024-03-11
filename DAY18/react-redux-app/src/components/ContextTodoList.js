import React, {useContext, useState, useRef} from "react";

const ContextTodoList = () => {
	const [todo, setTodo] = useState({title: "", priority: 0});

	const [todoList, setTodoList] = useState([]);

	const handleTodo = (e) => {
		setTodo({...todo, [e.target.name]: e.target.value});
	};

	const handleAddTodo = () => {
		setTodoList([...todoList, todo]);
	};

	return (
		<div>
			할일 이름 <input type="text" name="title" value={todo.title} onChange={handleTodo} />
			우선 순위 <input type="text" name="priority" value={todo.priority} onChange={handleTodo} />
			<button onClick={handleAddTodo}>할일목록 추가</button>
			<hr></hr>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						{item.title} ---- {item.priority}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContextTodoList;
