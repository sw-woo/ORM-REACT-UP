import React, {useState, useEffect, useRef} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

//벡엔드 RESTFul통신을 위한 axios 참조하기
import axios from "axios";

const ArticleDetail = () => {
	//단일게시글 정보 구조 정의 및 초기 데이터 정의
	//단일게시글 정보 구조 정의 및 초기 데이터 정의

	const [article, setArticle] = useState({title: "", contents: ""});

	//URL라우팅 주소에서 게시글 고유번호 추출하기

	const {aid} = useParams();
	console.log("파라메터 변수 값 출력하기", aid);

	//초기 페이지 렌더링시 마우스 포커스 처리를 위한 useRef정의하기

	const refTitle = useRef();

	const navigate = useNavigate();

	//최초 로딩시 제목 엽력박스에 마우스 포커스 추가

	const ArticleGetOne = async () => {
		try {
			const res = await axios.get(`http://localhost:3005/api/articles/${aid}`);
			console.log("벡엔드 데이터 조회결과가 반환되었습니다. ..2222222");
			console.log("단일 게시글 조회정보 출력:", res);
			if (res.data.code == "200") {
				//단일 게시글 정보 바인딩 처리
				//Axios 사용시 호출결과가 반환되고 반환된 결과 기반에서 추가 로직을 구현해야하는 경우는
				//반드시 than 콜백함수 안에서 로직을 구현해야하고 axios블럭 밖에서 구현하면
				//axios가 비동기 통신기반으로 작동하기 떄문에 axios결과가 반환되지 않았는데도 밖에 로직이 실행됩니다.
				setArticle(res.data.data);
				refTitle.current.focus();
			} else {
				console.log("벡엔드 호출 에러:", res.data.result);
			}
		} catch (err) {
			console.log("에러 출력", err);
		}
	};

	useEffect(() => {
		console.log("최초 화면 컴포넌트가 렌더링 됩니다.11111");

		// axios
		// 	.get(`http://localhost:3005/api/articles/${aid}`)
		// 	.then((res) => {
		// 		console.log("벡엔드 데이터 조회결과가 반환되었습니다. ..2222222");
		// 		console.log("단일 게시글 조회정보 출력:", res);
		// 		if (res.data.code == "200") {
		// 			//단일 게시글 정보 바인딩 처리
		// 			//Axios 사용시 호출결과가 반환되고 반환된 결과 기반에서 추가 로직을 구현해야하는 경우는
		// 			//반드시 than 콜백함수 안에서 로직을 구현해야하고 axios블럭 밖에서 구현하면
		// 			//axios가 비동기 통신기반으로 작동하기 떄문에 axios결과가 반환되지 않았는데도 밖에 로직이 실행됩니다.
		// 			setArticle(res.data.data);
		// 			refTitle.current.focus();
		// 		} else {
		// 			console.log("벡엔드 호출 에러:", res.data.result);
		// 		}
		// 	})
		// 	.catch((err) => {});

		ArticleGetOne();
		console.log("최초 화면 컴포넌트가 렌더링 됩니다.3333");
	}, []);

	//입력요소 데이터 바인딩 처리
	const onArticleChange = (e) => {
		setArticle({...article, [e.target.name]: e.target.value});
	};

	//저장 버튼 클릭시 데이터 저장 수정 처리후 게시글 목록으로 이동처리하기
	const onArticleSubmit = (e) => {
		if (article.title == "") {
			alert("타이틀이 비어있습니다.");
			refTitle.current.focus();
			e.preventDefault();
			return false;
		}

		//axios 콜백 방식 벡엔드 데이터 처리하기
		axios
			.post(`http://localhost:3005/api/articles/${aid}`, article)
			.then((res) => {
				console.log("데이터 수정 처리결과값:", res.data);

				if (res.data.code == "200") {
					alert("수정완료");
					//게시글 목록 이동처리
					navigate("/articles");
				} else {
					alert("수정실패");
				}
			})
			.catch((err) => {});

		e.preventDefault();
	};

	const onRemove = () => {
		if (window.confirm("정말로 삭제하시겠습니까?")) {
			//벡엔드 삭제 처리
			axios
				.delete(`http://localhost:3005/api/articles/${aid}`)
				.then((res) => {
					console.log("삭제처리 결과:", res);

					if (res.data.code == "200") {
						alert("삭제 완료");
						navigate("/articles");
					}
				})
				.catch((err) => {});
		}
	};

	const onList = () => {
		navigate("/articles");
	};

	return (
		<div className="article-wrapper">
			<div className="row mb-2">
				<div className="col text-left">
					<h1>게시글 정보확인</h1>
				</div>
				<div className="col">
					{/* <button className="btn btn-primary float-end p-1" onClick={() => navigate("/article")}>
						글작성
					</button> */}

					<Link className="btn btn-primary float-end p-1" to="/articles">
						글목록
					</Link>
				</div>
			</div>

			<form onSubmit={onArticleSubmit}>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">제목</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" name="title" ref={refTitle} value={article.title} onChange={onArticleChange} />
					</div>
				</div>

				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">내용</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" name="contents" rows="30" value={article.contents} onChange={onArticleChange} />
					</div>
				</div>
				<div className="row text-center">
					<div className="col">
						<button type="submit" className="btn btn-primary">
							저장
						</button>
						<button type="button" className="btn btn-danger" onClick={onRemove}>
							삭제
						</button>
						<button type="button" className="btn btn-info" onClick={onList}>
							목록
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ArticleDetail;
