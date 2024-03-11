import React from "react";

//Outlet안 중첩라우팅의 자식요소 컴포넌트를 부모 컴포넌트로서 어디에 위치시킬지를 지정하는요소를 참조한다.
import {Outlet} from "react-router-dom";

const Company = () => {
	return (
		<div>
			<h1>회사소개 페이지</h1>
			<p>글로우런은 함께 행복한 배움의 시간을 보내는 기업입니다.</p>

			{/* 중첩라우팅 요소에서 지정한 자식 컴포넌트가 아래 위치에 출력됩니다.
            자식요소를 추출하려면 중첩라우팅 주소를 호출해야한다. */}

			<Outlet />
		</div>
	);
};

export default Company;
