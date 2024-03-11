import React, {useContext} from "react";

//사용하고자 하는 전역 환경 컨텍스트가 서로

import {AppContext} from "../App";

const ContextCounter = () => {
	const todoCount = useContext(AppContext);

	return (
		<div>
			{/* <h1>할일 목록 건수: 0</h1> */}
			{/* useContext가 나오기전 사용 방법 */}
			{/* <AppContext.Consumer>
				{(todoCount) => {
					<h1>할일 목록 건수 {todoCount}</h1>;
				}}
			</AppContext.Consumer> */}
			{/* useContext 훅을 이용한 전역데이터 추출하기 */}
			<h1>할일건수 목록{todoCount}</h1>
		</div>
	);
};

export default ContextCounter;
