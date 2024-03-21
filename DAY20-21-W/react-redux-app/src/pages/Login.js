import React, {useState} from "react";

import axios from "axios";

//redux전역데이터 공간에 데이터를 반영하려면 useDispatch라는 훅을 참조합니다.
import {useDispatch} from "react-redux";

import {useNavigate} from "react-router-dom";

//redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
import {userLogin} from "../redux/actions";

const Login = () => {
	const globalDispatch = useDispatch();

	const navigate = useNavigate();

	const [login, setLogin] = useState({email: "", password: ""});

	const onChangeLogin = (ev) => {
		setLogin({...login, [ev.target.name]: ev.target.value});
	};

	//로그인 처리 이벤트 처리함수
	const onLogin = (e) => {
		//axios로 벡엔드 로그인 RESTful API 호출하기
		axios
			.post("http://localhost:3005/api/member/login", login)
			.then((res) => {
				console.log("로그인 결과값 확인:", res.data);

				window.localStorage.setItem("token", res.data.data.token);

				if (res.data.code === "200") {
					globalDispatch(userLogin(res.data.data.token, res.data.data.loginUser));
				}

				// axios.defaults.headers.common["Authorization"] = "Bearer " + token;

				//로그인한 사용자의 프로필 페이지로 이동시키기
				navigate("/profile");
			})
			.catch((err) => {
				if (err.result === "notCorrectPassword") {
					console.log("벡엔드 호출 에러발생");
				}
			});
		//서브및 이벤트가 발생하면 화면이 껌뻑거리는데 자동 껌뻑거리는 부분 방지
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

export default Login;
