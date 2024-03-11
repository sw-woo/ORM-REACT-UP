import React, {useState} from "react";

import {useNavigate} from "react-router-dom";

const ArticleRegist = () => {
	const [article, setArticle] = useState({title: "", contents: ""});

	const navigate = useNavigate();

	const onArticleChange = (e) => {
		setArticle({...article, [e.target.name]: e.target.value});
	};

	const onSave = () => {
		//step1:RESTful API를 호출해서 단일 게시글 정보를 벡엔드를 통해 등록처리한다.
		//step2:데이터 처리 완료 후 특정 URL로 컨텐츠 페이지를 이동시킨다.
		//프로그래밍 방식으로 리액트 페이지를 이동시킬때 사용한다.

		// navigate("/");
		navigate("/product/category/500");
		// useHistory.push({pathname: "/product/category/500"});
	};

	return (
		<div>
			<h1>게시글 등록 페이지</h1>
			제목: <input name="title" value={article.title} onChange={onArticleChange} />
			내용:
			<textarea named="contents" onChange={onArticleChange}>
				{article.contents}
			</textarea>
			<button onClick={onSave}>저장</button>
		</div>
	);
};

export default ArticleRegist;
