import React, {useState} from "react";

import axios from "axios";

//redux의 connect 함수를 참조한다.

import {connect} from "react-redux";

//redux전역데이터 공간에 데이터를 반영하려면 useDispatch라는 훅을 참조합니다.
// import {useDispatch} from "react-redux";

import {useNavigate} from "react-router-dom";

//redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
import {loginUser, apiError} from "../redux/actions";

const Login2 = (props) => {
	//전역데이터에 로그인한 사용자 토큰값 조회하기
	//useSelector훅을 이용하지 않고 connect함수를 통해 해당 컴포넌트에 props에 바인딩 전역데이터를 이용해보자

	console.log("전역 데이터 로그인 사용자 토큰값", props.token);

	console.log("전역 데이터 로그인 사용자 토큰값", props.loginUser);

	const navigate = useNavigate();

	const [login, setLogin] = useState({email: "", password: ""});

	const onChangeLogin = (ev) => {
		setLogin({...login, [ev.target.name]: ev.target.value});
	};

	//로그인 처리 이벤트 처리함수
	const onLogin = (e) => {
		//axios로 벡엔드 로그인 RESTful API 호출하기
		// axios
		// 	.post("http://localhost:3005/api/member/login", login)
		// 	.then((res) => {
		// 		console.log("로그인 결과값 확인:", res.data);

		// 		window.localStorage.setItem("token", res.data.data.token);

		// 		if (res.data.code === "200") {
		// 			//userLogin()액션함수를 바로 사용하면 됩니다.
		// 			props.userLogin(res.data.data.token, res.data.data.loginUser);
		// 		}

		// 		//로그인한 사용자의 프로필 페이지로 이동시키기
		// 		navigate("/profile2");
		// 	})
		// 	.catch((err) => {
		// 		if (err.result === "notCorrectPassword") {
		// 			console.log("벡엔드 호출 에러발생");
		// 		}
		// 	});
		//서브및 이벤트가 발생하면 화면이 껌뻑거리는데 자동 껌뻑거리는 부분 방지

		//saga 미들웨어 기반 로그인처리 기능 적용
		console.log("saga미들웨어 함수", login.email, login.password);
		props.loginUser(login.email, login.password, navigate);

		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={onLogin}>
				메일주소: <input type="text" name="email" value={login.email} onChange={onChangeLogin} /> <br />
				암호:
				<input type="password" name="password" value={login.password} onChange={onChangeLogin} /> <br />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
};

//전역데이터 속성과 값을 해당 컴포넌트에 props하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
	const {token, loginUser} = state.Auth;
	return {token, loginUser};
};

//redux connect()함수를 호출하고 (컴포넌트명) 지정해주면 전역데이터 공간과 해당 컴포넌트를 연결할 수 있다.
//connect('전역데이터를 해당 컴포넌트에 props속성으로 바인딩해주는 함수정의', 각종액션함수를 지정해주면 해당 액션함수가 props에 하위함수로 제공딤)
export default connect(mapStateToProps, {loginUser, apiError})(Login2);
