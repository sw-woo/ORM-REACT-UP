import React from "react";

//useParams방식으로 url에 값을 전달해준다.
import {useParams} from "react-router-dom";

const Category = () => {
	//사용자 요청 URL에 와일드카드 idx값이 있는경우 해당 값 추출하기
	const {idx} = useParams();

	// const { idx } = match.params;

	return (
		<div>
			<h1>상품 상세 정보 페이지</h1>
			<h3>추출된 파라메터 값 idx = {idx}</h3>
		</div>
	);
};

export default Category;
