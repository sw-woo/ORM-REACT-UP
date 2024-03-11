//stpe1: 해당 액션과 관련된 액션타입을 참조합니다.

import {TODO_COUNT} from "../../constants/actionTypes";

//STEP2: 액션함수 정의 하기
//액션함수기본구조 (컴포넌트에서 전달되는 데이터) => (액션객체 정의 {type:액션타임,payload:{리듀서로 전달되는 데이터 구조:컴포넌트에서 전달되는 데이터 포함}})
//{todoCount:todoCount} 속성명 속성값이 같아서 생략
export const addTodoCount = (todoCount) => ({
	type: TODO_COUNT,
	payload: {todoCount},
});
