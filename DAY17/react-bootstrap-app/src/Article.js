import React, {useState, useRef, useEffect} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import axios from "axios";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import moment from "moment-timezone";

const Article = () => {
	const koreaTime = moment().tz("Asia/Seoul").format("YYYY년 MM월 DD일 HH시 mm분 ss초");

	const navigate = useNavigate();
	//단일게시글 정보 구조 정의 및 초기 데이터 정의

	const [article, setArticle] = useState({title: "", contents: "", reg_date: koreaTime});

	//모달 팝업 오픈제어 상태값 정의하기

	const [modal, setModal] = useState(false);

	//모달 팝업에서 버튼이 눌리면 true
	const toggle = () => {
		setModal(!modal);
		navigate("/articles");
	};

	//모답팝업 본문 영역 텍스트 바인딩 부분
	const [validationText, setValidationText] = useState("");

	//초기 페이지 렌더링시 마우스 포커스 처리를 위한 useRef정의하기

	const refTitle = useRef();

	//최초 로딩시 제목 엽력박스에 마우스 포커스 추가

	useEffect(() => {
		refTitle.current.focus();
	}, []);

	//입력요소 데이터 바인딩 처리
	const onArticleChange = (e) => {
		setArticle({...article, [e.target.name]: e.target.value, reg_date: koreaTime});
	};

	//저장 버튼 클릭시 데이터 저장 처리후 게시글 목록으로 이동처리하기
	const onArticleSubmit = (e) => {
		if (article.title == "") {
			// alert("타이틀이 비어있습니다.");
			setValidationText("제목을 입력해주세요!");
			setModal(true);
			refTitle.current.focus();
			e.preventDefault();
			return false;
		}

		//axios 콜백 방식 벡엔드 데이터 처리하기
		// axios
		// 	.post("http://localhost:3005/api/articles", article)
		// 	.then((res) => {
		// 		console.log("데이터 처리결과값:", res.data);

		// 		if (res.data.code == "200") {
		// 			alert("등록완료");
		// 			navigate("/articles");
		// 		} else {
		// 			alert("등록실패");
		// 		}
		// 	})
		// 	.catch((err) => {});

		//axios 비동기 async await 함수 작성
		articlePostCreate(e);

		e.preventDefault();
	};

	const articlePostCreate = async (e) => {
		try {
			const res = await axios.post("http://localhost:3005/api/articles", article);
			console.log("받아온 데이터 값 출력", res);
			setValidationText("등록완료!");
			setModal(true);
			// navigate("/articles");
		} catch (err) {
			setValidationText("등록실패!");
			setModal(true);
			console.log("벡엔드 데이터 조회 에러", err);
		}
	};

	return (
		<div className="article-wrapper">
			<div className="row mb-2">
				<div className="col text-left">
					<h1>게시글 작성</h1>
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
					</div>
				</div>
			</form>
			{/* <Button color="danger" onClick={toggle}>
				Click Me
			</Button> */}
			<Modal isOpen={modal}>
				<ModalHeader>유효성검사</ModalHeader>
				<ModalBody>{validationText}</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						확인
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						취소
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default Article;
