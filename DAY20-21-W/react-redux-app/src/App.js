import "./App.css";

import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";

//컴포넌트 참조하기
// import TodoList from "./components/TodoList";
// import Counter from "./components/Counter";

import GNB from "./components/GNB";

// lazy()컴포넌트 참조하기
const LoginPage = React.lazy(() => import("./pages/Login"));
const EntryPage = React.lazy(() => import("./pages/Register"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));
const ProfilePage2 = React.lazy(() => import("./pages/Profile2"));
const MainPage = React.lazy(() => import("./pages/Main"));
const Login2Page = React.lazy(() => import("./pages/Login2"));
function App() {
	return (
		<div className="App">
			{/* <Counter></Counter>
			<hr></hr>
			<TodoList></TodoList> */}

			<GNB />
			<Suspense fallback={<div>로딩중....</div>}>
				<Routes>
					<Route path="/" Component={MainPage}></Route>
					<Route path="/login" Component={LoginPage}></Route>
					<Route path="/entry" Component={EntryPage}></Route>
					<Route path="/profile" Component={ProfilePage}></Route>
					<Route path="/login2" Component={Login2Page}></Route>
					<Route path="/profile2" Component={ProfilePage2}></Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
