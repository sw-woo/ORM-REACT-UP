import React, {Suspense} from "react";

//라우팅을 위한 Routes,Route객체를 참조합니다.
import {Routes, Route, BrowserRouter} from "react-router-dom";

//컴포넌트 참조하기-기본방식

import Footer from "./components/Footer";
import Header from "./components/Header";

//각종 페이지컴포넌트를 참조한다.
//일반적인 컴포넌트 참조방식은 최초 로딩시 성능 저하 그리고 컴포넌트 렌더링시 대체 효과등을 추기가 어렵다!
// import Main from "./pages/Main";
// import Company from "./pages/Company";

// import Login from "./pages/ouath/Login";
// import Entry from "./pages/ouath/Entry";

// import ArticleList from "./pages/board/ArticleList";
// import ArticleDetail from "./pages/board/ArticleDetail";
// import ArticleRegist from "./pages/board/ArticleRegist";

// import Product from "./pages/product/Product";
// import Category from "./pages/product/Category";

// import NoneExistPage from "./pages/NoneExistPage";
// import CompanyLocation from "./pages/CompanyLocation";

//react.lazy()메소드와 Suspens를 이용해 코드분할방식을 적용해서
//최초 로딩 및 라우팅시 성능 개선을 처리해봅니다.
//react.lazy()를 이용해 코드분할하는경우
const Main = React.lazy(() => import("./pages/Main"));

const Company = React.lazy(() => import("./pages/Company"));

const Login = React.lazy(() => import("./pages/ouath/Login"));
const Entry = React.lazy(() => import("./pages/ouath/Entry"));

const ArticleList = React.lazy(() => import("./pages/board/ArticleList"));
const ArticleDetail = React.lazy(() => import("./pages/board/ArticleDetail"));
const ArticleRegist = React.lazy(() => import("./pages/board/ArticleRegist"));

const Product = React.lazy(() => import("./pages/product/Product"));
const Category = React.lazy(() => import("./pages/product/Category"));

const NoneExistPage = React.lazy(() => import("./pages/NoneExistPage"));
const CompanyLocation = React.lazy(() => import("./pages/CompanyLocation"));

function App() {
	return (
		<BrowserRouter>
			<div>
				{/* App.js 최상위 컴포넌트에서 전체 리액트앱의 레이아웃 구성을 합니다. */}

				{/* 상단 GNB 공통 레이아웃 메뉴 영역 */}
				<Header></Header>

				{/* 컨텐츠 영역을 라우트를 이용해 라우팅 주소를 정의하고 라우팅 규칙을 정의합니다. */}
				{/* 서스펜스 리액트 lazy()를 호출해서 사용합니다. react동적분할과 렌더링 기법 */}
				<Suspense fallback={<div>로딩중...이미지 또는 텍스트를 여기에 표현합니다.</div>}>
					<Routes>
						{/* Route path속성에 URL주소체계를 정의하고 Component 속성에 상단 참조한 컴포넌트를 정의한다. */}

						<Route path="/" Component={Main}></Route>
						<Route path="/company" Component={Company}>
							<Route path="location" Component={CompanyLocation}></Route>
						</Route>

						<Route path="/login" Component={Login}></Route>
						<Route path="/entry" Component={Entry}></Route>

						<Route path="/article/list" Component={ArticleList}></Route>
						<Route path="/article/regist" Component={ArticleRegist}></Route>
						<Route path="/article/detail" Component={ArticleDetail}></Route>

						<Route path="/product/detail" Component={Product}></Route>
						<Route path="/product/category/:idx" Component={Category}></Route>

						{/* *은 사용자가 요청한 웹페에지와 일치하지 않은 경우 보여줄 컴포넌트 저장하기 */}
						<Route path="*" Component={NoneExistPage}></Route>
					</Routes>
				</Suspense>
				{/* 하단 풋터 레이아웃 공통 영역 */}
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
