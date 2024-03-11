import React, {useState, useMemo, useCallback, useRef, useEffect} from "react";

//계산로직 함수 구현하기

const getAverage = (numbers) => {
	console.log("평균값을 계산하는 중입니다 getAverage 함수 호출.");

	if (numbers.length === 0) {
		return;
	}

	//array.reduce()는 배열내 모든 값을 합친 결과를 반환하는 배열합수
	const sum = numbers.reduce((a, b) => a + b);

	return sum / numbers.length;
};

const PerformHook = () => {
	//숫자 입력박스의 HTML요소를 직접 스크립트로 제어하기위해 호출한다.
	const numberTag = useRef(null);

	//단일 숫자 입력 데이터
	const [number, setNumber] = useState(0);

	const [list, setList] = useState([]);

	//평균값 변수 선언 및 평균값 처리 하기

	//useMemo훅을 사용하지 않고 호출하는 공통연산함수
	// const avg = getAverage(list);

	//useMemo훅을 사용해 호출하는 공통연산함수
	//useMemo(실행함수,[데이터변경조건상태값지정]);
	//list 숫자배열의 값이 변경될때만 getAverage() 함수를 호출하게한다.
	//메모제이션 기능을 이용해 list의 값을 별도 저장소에 기록하고 있다가 변경을 감지하면 getAverage()함수를 실행시킨다.
	const avg = useMemo(() => getAverage(list), [list]);

	//단일숫자 배열등록 처리 함수
	// const onAdd = () => {
	// 	//concat() == 기존배열에 새로운 배열을 추가하고 새로운 배열복사본을 만들어 준다 (deep Copy)
	// 	setList(list.concat(parseInt(number)));
	// 	setNumber(0);
	// };

	//useCallback 훅을 통해서 onAdd함수는 number,list데이터가 변경될떄만 해당 함수가 만들어지게 하여
	//불필요하게 모든 이벤트 또는 화면렌더링시 함수가 만들어지는것을 방지하여 성능을 개선합니다.
	const onAdd = useCallback(() => {
		//concat() == 기존배열에 새로운 배열을 추가하고 새로운 배열복사본을 만들어 준다 (deep Copy)
		setList(list.concat(parseInt(number)));
		setNumber(0);

		//입력요소에 마우스 포커스를 맞추어 줍니다.
		numberTag.current.focus();
	}, [number, list]);

	//최초로 해당 컴포넌트가 마운팅(렌더링)될때 시점에
	//마우스 포커스를 특정 입력요소에 맞추어준다.
	useEffect(() => {
		numberTag.current.focus();
	});

	//입력박수값 데이터 바인딩 처리하기
	//컴포넌트내 각종 데이터바인딩 변경이 발생할떄(이벤트가발생)마다 하기 주요 이벤트 핸들러 함수가 매번 만들어진다.
	// const onNumberChange = (e) => {
	// 	setNumber(e.target.value);
	// };

	//이벤트 처리함수와 관련된 특정 데이터가 변경이 발생할때만 해당 이벤트 핸들러 함수가 생성되게하면
	//리액트 성능이 개선되고 useCallback훅을 통해 관련기능을 추가 구현합니다.
	//최초로 화면 컴포넌트가 로딩이 완료될때 한번만 해당 함수가 생성됩니다.
	//useCallback(실행함수정의,[실행조건]) // 실행
	const onNumberChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []);

	return (
		<div>
			<input ref={numberTag} value={number} onChange={onNumberChange}></input>
			<button onClick={onAdd}>등록</button>

			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
				<li></li>
			</ul>

			<div>
				<b>평균값:{avg}</b>
			</div>
		</div>
	);
};

export default PerformHook;
