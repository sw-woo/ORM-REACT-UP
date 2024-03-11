import "./App.css";
import React from "react";
//bootstrap css 파일 참조하기
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//bootstrap css Sass(scss)파일을 직접 참조하고 css번들링을 통해 부트스트랩.css파일 생성해서 사용하기
//React프로젝트에서 ~.scss파일을 참조한경우 반드시 번들링 sw를 통해서 css번들링과정을 거친후에야 css사용가능함
//yarn add node-sass를 리액트 프로젝트에 설치하면 리액트 파일내. ~scss파일이 node-sass에 의해 자동 번들링(웹팩)되어 순수 css로 변환됨
import "../node_modules/bootstrap/scss/bootstrap.scss";

//라우팅을 위한 react-router-dom 패키지의 BrowserRouter, Routes, Route 참조하기
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import GNB from "./components/GNB";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Article from "./Article";
import Articles from "./Articles";
import ArticleDetail from "./ArticleDetail";

function App() {
	return (
		<Router>
			{/* 최상위 GNB 전역메뉴 표시 영역 */}
			<GNB />
			<div className="App">
				{/* 라우트를 이용한 콘텐츠 표시 영역 */}
				{/* <div className="auth-wrapper">
					<div className="auth-inner"> */}
				<Routes>
					<Route path="/" Component={Main}></Route>
					<Route path="/signin" Component={Login}></Route>
					<Route path="/signup" Component={Register}></Route>
					<Route path="/article" Component={Article}></Route>
					<Route path="/articles" Component={Articles}></Route>
					<Route path="/article/:aid" Component={ArticleDetail}></Route>
				</Routes>
				{/* </div>
				</div> */}
			</div>
			{/* 하단 컴포넌트에 전체 어플리케이션 레이아웃을 구성합니다. */}
			<Footer />
		</Router>
	);
}

export default App;
