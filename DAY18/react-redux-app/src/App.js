import "./App.css";
import React, {createContext, useState, useContext} from "react";

import ContextCounter from "./components/ContextCounter";
import ContextTodoList from "./components/ContextTodoList";

//전체 리액트맵의 ContextAPI기반
export const AppContext = createContext();

function App() {
	const todoCount = 10;

	return (
		<div className="App">
			<AppContext.Provider value={todoCount}>
				<ContextTodoList></ContextTodoList>
				<hr></hr>
				<ContextCounter></ContextCounter>
			</AppContext.Provider>
		</div>
	);
}

export default App;
