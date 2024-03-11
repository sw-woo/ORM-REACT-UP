import React from "react";

//useParams방식으로 url에 값을 전달해준다.
import {useSearchParams} from "react-router-dom";

const ArticleDetail = () => {
	//사용자 요청 URL에 와일드카드 idx값이 있는경우 해당 값 추출하기

	//여러개의 키와 값이 존재할수 있는 값이 배열로 전달 됩니다.
	const [searchParams, setSearchParams] = useSearchParams();

	const aidx = searchParams ? searchParams.get("aidx") : null;
	const stock = searchParams ? searchParams.get("stock") : null;

	return (
		<div>
			<h1>아티클 상세 정보 페이지</h1>
			<h3>추출된 파라메터 값 aidx = {aidx}</h3>
			<h3>추출된 파라메터 값 stock = {stock}</h3>
		</div>
	);
};

export default ArticleDetail;
