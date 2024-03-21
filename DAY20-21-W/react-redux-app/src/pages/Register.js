import React, {useState} from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

const Register = () => {
	const [user, setUser] = useState({email: "", password: "", name: ""});

	const navigate = useNavigate();

	//회원가입 이벤트 처리 함수
	const onEntry = (e) => {
		//axios로 회원가입 처리 RESTAPI를 호출해서 회원가입 처리

		const entryData = {
			email: user.email,
			password: user.password,
			name: user.name,
		};

		axios
			.post("http://localhost:3005/api/member/entry", entryData)
			.then((res) => {
				console.log("회원가입 결과값", res.data);
				navigate("/login");
			})
			.catch((err) => {
				console.error("벡엔드 호출 에러발생...");
			});
		e.preventDefault();
	};

	//회원정보 데이터 바인딩 처리 함수
	const onChangeEntry = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
	};

	return (
		<div>
			<form onSubmit={onEntry}>
				메일주소: <input type="text" name="email" value={user.email} onChange={onChangeEntry} /> <br />
				암호: <input type="password" name="password" value={user.password} onChange={onChangeEntry} /> <br />
				이름: <input type="text" name="name" value={user.name} onChange={onChangeEntry} /> <br />
				<button type="submit">회원가입</button>
			</form>
		</div>
	);
};

export default Register;
