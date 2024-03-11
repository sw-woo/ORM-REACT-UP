import React, {useEffect, useState} from "react";

//전역 데이터 공간에서 로그인한 사용자 정보 가져오기위한 useSelector 훅 참조하기
// import {useSelector} from "react-redux";

//connect함수를 이용해 전역데이터를 불러옵시다.
import {connect} from "react-redux";

const Profile2 = (props) => {
	//전역데이터 공간에 로그인한 사용자 정보 가져오기

	//최초 컴포넌트 렌더링시에만 벡엔드에서 로그인 사용자 정보조회/바인딩 처리하기
	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:3005/api/member/profile", {
	// 			headers: {Authorization: `Bearer ${token}`},
	// 		})
	// 		.then((res) => {
	// 			console.log("로그인 사용자 정보 출력", res.data.data);
	// 			setUser(res.data.data);
	// 		})
	// 		.catch((err) => {
	// 			console.error("로그인 사용자 정보 출력", err);
	// 		});
	// }, []);

	return (
		<div>
			<h1>로그인한 사용자의 프로필정보1 - 리덕스(스토어)전역정보 기반</h1>
			메일주소: {props.loginUser.email}
			<br />
			이름 : {props.loginUser.name} <br />
			프로필 사진: <br />
			<img src={props.loginUser.profile_img_path} />
			<br />
			<hr></hr>
			{/* <h1>로그인한 사용자의 프로필정보2 - jwt토큰 기반 전역데이터 벡엔드 프로세스</h1>
			메일주소: {user.email}
			<br />
			이름 : {user.name} <br />
			프로필 사진: <br />
			<img src={user.profile_img_path} />
			<br /> */}
		</div>
	);
};

//전역데이터 속성과 값을 해당 컴포넌트에 props하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
	const {token, loginUser} = state.Auth;
	return {token, loginUser};
};

export default connect(mapStateToProps)(Profile2);
