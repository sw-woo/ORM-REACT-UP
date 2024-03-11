//어플리케이션 컨테스트 프로바이더에서 제공하는 전역데이터 참조를 위한 useContext훅 참조하기
import React, {useContext} from "react";

import {AppContext} from "../App";

const Counter = () => {
	//카운터 전역 데이터 값 추출하기
	//useContext(AppContext)는 배열을 반환하고 배열의 첫번째 값에 context Value값 할당.
	const [count] = useContext(AppContext);

	return (
		<div>
			<h1>총 할일건수:{count}</h1>
		</div>
	);
};

export default Counter;
