import React, {useState} from "react";
import "./Board.css";
const Board = () => {
	const [board, setBoard] = useState({
		id: 1,
		title: "오늘은 무엇을 해볼까?",
		contents: "즐거운 수업 강의 참석",
		author: "woosungwoo",
	});

	const [boardList, setBoardList] = useState([
		{
			id: 1,
			displayID: 1,
			title: "오늘은 무엇을 해볼까?",
			contents: "즐거운 수업 강의 참석",
			author: "woosungwoo",
		},
		{
			id: 2,
			title: "오늘은 무엇을 해볼까?",
			contents: "즐거운 수업 강의 참석",
			author: "woosungwoo",
		},
		{
			id: 3,
			title: "오늘은 무엇을 해볼까?",
			contents: "즐거운 수업 강의 참석",
			author: "woosungwoo",
		},
	]);

	const handleBoard = (e) => {
		setBoard({...board, [e.target.name]: e.target.value});
	};

	const handleSave = () => {
		// 중복 확인
		if (boardList.some((item) => item.id === board.id)) {
			console.log("중복된 ID가 있습니다. 새로운 ID 부여를 시도합니다.");
			// 새로운 ID를 부여하거나 중복되지 않으면 등록
			const newId = boardList.length > 0 ? Math.max(...boardList.map((item) => item.id)) + 1 : 1;
			setBoardList([...boardList, {...board, id: newId}].sort((a, b) => a.id - b.id));
			return;
		}

		setBoardList([...boardList, {...board, id: boardList.length + 1}].sort((a, b) => a.id - b.id));
	};
	const handleModify = () => {
		const modifiedList = boardList.map((item) => (item.id === board.id ? {...board} : item));
		setBoardList(modifiedList.sort((a, b) => a.id - b.id));
	};

	const handleRemove = () => {
		const filteredList = boardList.filter((item) => item.id !== board.id);
		setBoardList(filteredList.sort((a, b) => a.id - b.id));
		boardClear();
	};
	const handleInit = () => {
		setBoardList([]);
	};

	const handleSelect = (board) => {
		setBoard(board);
	};

	const handleDelete = (board) => {
		const filteredboardList = boardList.filter((boardL) => boardL.id !== board.id);
		setBoardList(filteredboardList.sort((a, b) => a.id - b.id));
	};

	const boardClear = () => {
		setBoard({id: 0, title: "", contents: "", author: ""}); // 초기화
	};
	return (
		<div className="board-container">
			<h2>게시판</h2>
			<div className="input-section">
				<div>
					<label className="label">제목: </label>
					<input type="text" name="title" value={board.title} onChange={handleBoard} className="input-field" />
					<label className="label">내용: </label>
					<input type="text" name="contents" value={board.contents} onChange={handleBoard} className="input-field" />
					<label className="label">등록자: </label>
					<input type="text" name="author" value={board.author} onChange={handleBoard} className="input-field" />
				</div>
				<div className="button-group">
					<button className="button1" onClick={handleSave}>
						등록
					</button>
					<button className="button2" onClick={handleModify}>
						수정
					</button>
					<button className="button3" onClick={handleRemove}>
						삭제
					</button>
					<button className="button4" onClick={handleInit}>
						초기화
					</button>
				</div>
			</div>
			<hr></hr>
			<br></br>
			<table style={{width: "100%", borderCollapse: "collapse"}}>
				<thead>
					<tr>
						<th style={{textAlign: "center", width: "10%"}}>글순번</th>
						<th>제목</th>
						<th>내용</th>
						<th>글쓴이</th>
						<th>선택</th>
						{/* <th>삭제</th> */}
					</tr>
				</thead>
				<tbody>
					{boardList.map((board, i) => (
						<tr key={i} style={{borderBottom: "1px solid #ddd"}}>
							<td style={{textAlign: "center", padding: "10px"}}>{board.id}</td>
							<td style={{padding: "10px"}}>{board.title}</td>
							<td style={{padding: "10px"}}>{board.contents}</td>
							<td style={{padding: "10px"}}>{board.author}</td>
							<td style={{textAlign: "center", padding: "10px"}}>
								<button
									style={{
										padding: "5px 10px",
										backgroundColor: "#4CAF50",
										color: "white",
										border: "none",
										borderRadius: "3px",
										cursor: "pointer",
									}}
									onClick={() => handleSelect(board)}
								>
									선택
								</button>
							</td>
							{/* <td style={{textAlign: "center", padding: "10px"}}>
								<button
									style={{
										padding: "5px 10px",
										backgroundColor: "#f44336",
										color: "white",
										border: "none",
										borderRadius: "3px",
										cursor: "pointer",
									}}
									onClick={() => handleDelete(board)}
								>
									삭제
								</button>
							</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Board;
