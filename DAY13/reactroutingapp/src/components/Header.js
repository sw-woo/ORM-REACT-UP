import React from "react";

//react-router-dom Link를 참조해서 a태그와 같이 특정 주소로 페이지를 이동시킨다.
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<div style={{height: "100px", backgroundColor: "gray"}}>
			<h1>상단 헤더 공통 메뉴바 영역</h1>
			<Link to="/">홈</Link> | <Link to="/article/list">게시글</Link> | <Link to="/article/detail?aidx=100&stock=200">게시글 상세</Link>|<Link to="/article/regist">게시글 등록</Link>|
			<Link to="/product/category/10">상품목록</Link> | |<Link to="/company">회사소개</Link> |<Link to="/login">로그인</Link> |<Link to="/entry">회원가입</Link>
		</div>
	);
};

export default Header;
