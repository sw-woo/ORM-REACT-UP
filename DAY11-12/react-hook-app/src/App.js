import "./App.css";
//전역상태관리를 위한 객체참조하기
import React, {Children, createContext, useContext, useState} from "react";
import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import Counter2 from "./Counter2";
import UseEffectHook from "./UseEffectHook";
import PerformHook from "./PerformHook";

import Counter from "./context/Counter";
import TodoList from "./context/TodoList";

//전역 리액트 어플리케이션 컨테스트 만들고 외부로 노출하기
export const AppContext = createContext();

//카운터 전욕 데이터 제공 프로바이더 생성함수 정의하기
//전역데이터를 제공해주는 최상위 컴포넌트 정의하기
function CounterProvider({children}) {
	//전역으로 사용될 할일건수 상태값 정의 const [count,setCount] = useState(0) 으로 사용했는데 setterFunction이 없는 경우
	//useState를 변수만 할당함...
	//객체로 정의 해서 전달하면 더많은 값을 value객체쪽에 넣어준다.
	const count = useState(0);
	//객체로 정의 해서 전달하면 더많은 값을 value객체쪽에 넣어준다.
	return <AppContext.Provider value={count}>{children}</AppContext.Provider>;
}

function App() {
	return (
		<div className="App">
			{/* 전역데이터 제공 프로바이더 컴포넌트로 최상위 컴포넌트의 자식요소를 감싸줍니다. */}
			<CounterProvider>
				<Counter></Counter>

				<hr></hr>
				<br></br>

				<TodoList></TodoList>
			</CounterProvider>
			{/* 성능 최적화 훅 테스트 영역 */}
			{/* <PerformHook></PerformHook> */}
			{/* <UseStateHook></UseStateHook>

			<hr></hr>
			<br></br>
			<UseReducerHook></UseReducerHook>

			<hr></hr>
			<br></br>
			<Counter2></Counter2>

			<hr></hr>
			<br></br>
			<UseEffectHook></UseEffectHook> */}
		</div>
	);
}

export default App;
