import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import moment from "moment-timezone";

//벡엔드 RESTFul통신을 위한 axios 참조하기
import axios from "axios";

const Articles = () => {
	// 한국 시간으로 형식화
	const koreanDateFormat = new Intl.DateTimeFormat("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZone: "Asia/Seoul",
	});

	const navigate = useNavigate();

	//게시글 목록 데이터 상태 구조 정의하기

	const [articleList, setArticleList] = useState([]);

	//최초 화면렌더링시에 벡엔드 게시글 목록 조회/바인딩하기

	useEffect(() => {
		console.log("최초 화면렌더링시에 호출됩니다.11111");
		//콜백 방식 axios 비동기 방식 데이터 호출 처리 방법 1
		//콜백방식으로 axios를 구현하는 경우 가독성이 떨어지고 후행로직이 있는 경우 Callback지옥이 재현된다.
		//axios 비동기 통신 콜백지옥문제를 해결하기 위해선느 주로 promise방식보다는 async/await방식을 통해구현한다.
		// axios
		// 	.get("http://localhost:3005/api/articles")
		// 	.then((res) => {
		// 		console.log("벡엔드에서 전달된 데이터 목록:222222", res);
		// 		if (res.data.code == "200") {
		// 			//벡엔드 데이터로 데이터 바인딩 처리하기
		// 			setArticleList(res.data.data);
		// 		} else {
		// 			console.log("벡엔드에서 호출 에러 발생:", res.data.result);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log("벡엔드에서 호출 에러 발생:", err);
		// 	});
		getArticles();
		//
		console.log("데이터 조회 처리와 상관없는 로직/ 구현 3333");
	}, []);

	//비동기 함수 구현1

	async function getArticles() {
		try {
			const res = await axios.get("http://localhost:3005/api/articles");
			console.log("받아온 데이터 값 출력", res);
			setArticleList(res.data.data);
		} catch (err) {
			console.log("벡엔드 데이터 조회 에러", err);
		}
	}

	const getArticles2 = async () => {
		try {
			const res = await axios.get("http://localhost:3005/api/articles");
			console.log("받아온 데이터 값 출력", res);
			setArticleList(res.data.data);
		} catch (err) {
			console.log("벡엔드 데이터 조회 에러", err);
		}
	};

	return (
		<div className="article-wrapper">
			<div className="row mb-2">
				<div className="col text-left">
					<h1>게시글 목록</h1>
				</div>
				<div className="col">
					{/* <button className="btn btn-primary float-end p-1" onClick={() => navigate("/article")}>
						글작성
					</button> */}
					<Link className="btn btn-primary float-end p-1" to="/article">
						글작성
					</Link>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">글순번</th>
						<th scope="col">제목</th>
						<th scope="col">조회수</th>
						<th scope="col">글쓴이</th>
						<th scope="col">등록일시</th>
					</tr>
				</thead>
				<tbody>
					{articleList.map((item, index) => (
						<tr key={index}>
							<th scope="row">{item.article_id}</th>
							<td>
								<Link to={{pathname: "/article/" + item.article_id}}>{item.title}</Link>
							</td>
							<td>{item.view_count}</td>
							<td>{item.reg_member_id}</td>
							<td>{moment(item.reg_date).tz("Asia/Seoul").format("YYYY년 MM월 DD일 HH시 mm분 ss초")}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Articles;
