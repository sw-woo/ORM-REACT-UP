//원시타입 변수 선언과 할당의 의미를 알아보자

let score;

score = 80;
score = 90;

console.log("스코어값:", score);

//원시타입 score값을 copy변수에 복사 할당한다.
let copy = score;

console.log("copy-score1", copy, score);

copy = 100;
//복사한 원시타입의 값을 변경해도 원본의 값은 변경되지 않는다.- 실제 저장되는 메모리 공간(주소) 다르다는 뜻
console.log("copy-score2", copy, score);

//=== 값을 비교하는 타입까지 같이비교하고 정확히는 동일한 메모리 주소를 바라보는지를 체크하는것...
console.log("변수의 메모리주소가 같은지 여부체크", score === copy);

// 원본 객체
let originalObject = {key: "value"};

// 얕은 복사
let shallowCopy = originalObject;

// 결과 확인
console.log(originalObject); // { key: 'value' }
console.log(shallowCopy); // { key: 'value' }

// 값을 변경
shallowCopy.key = "new value";

// 변경된 값 확인
console.log(originalObject); // { key: 'new value' }
console.log(shallowCopy); // { key: 'new value' }

//참조타입의 불변성에 대해 학습해봅니다.
//기본적으로 참조타입은 불변성을 지원하지 않습니다. = 동일한 메모리공간을 참조/재사용한다.
//참조타입은 값을 변경해서 새로운 메모리공간을 할당하지 않고 기존 할당된 메모리공간(메모리주소)에 값을 업데이트합니다.

var user1;

user1 = {
	id: 1,
	name: "sungwoo",
	age: 30,
	address: {sido: "서울시", detail: "서울시 강서구"},
};

console.log("참조타입-객체정의하고 값할당하기", user1);

user1.name = "우성우";

console.log("참조타입-객체정의하고 값할당하기", user1);

//참조타입을 복사해봅니다.
//참조타입을 그냥 복사하면 복사한 원본의 주소를 참조하고 같은 공간의 데이터를 공유하게되며
//공유된 공간의 값을 복사하는데 이를 얕은카피(Shallow Copy)라고 합니다.

var user2 = user1;

// var user2 = {...user1};

user2.name = "가브리엘";

console.log("user1", user1);
console.log("user2", user2);

console.log("user1 === user2", user1 === user2);

user1DeepCopy = {
	...user1,
	address: {...user1.address},
};
user1DeepCopy.address.sido = "미시시피";

user1DeepCopy.address.detail = "미국";

console.log("유저딥카피 === 유저가 같은지 확인", user1DeepCopy === user1);

// function sunFrom1ToN(n) {
// 	if (n <= 1) {
// 		return n;
// 	} else {
// 		return n + sunFrom1ToN(n - 1);
// 	}
// }

// console.log(sunFrom1ToN(5));
