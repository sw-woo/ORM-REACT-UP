import useSWR, {mutate, useSWRConfig} from "swr";

//전역 개발자 정의 타입 참조하기
import {member} from "@/app/types/definitions";

//get타입의 기본 데이터 조회 전용 fetch함수 정의
const getFetcher = (url: string) => fetch(url).then((res) => res.json());

//post타입의 데이터 fetch함수 정의
const postMemberFetcher = (url: string) => fetch(url).then((res) => res.json());

//벡엔드 API 호출하고 SWR훅으로 값을 반환해주는 전용 개발자 훅함수 정의하기

const useBlogDetail = (blogId: string) => {
	const {data, error, isLoading} = useSWR<any>(`http://localhost:3005/api/articles/${blogId}`, getFetcher);

	return {
		data: data,
		error: error,
		isLoading: isLoading,
	};
};

// const registMember = async (member: member) => {
//     const {fetcher,us}
// 	// const {data, error, isLoading} = useSWR<any>(`http://localhost:3005/api/member/entry`, postMemberFetcher);
//     await fetcher("http://localhost:3005/api/member/entry", member);
// 	mutate("http://localhost:3005/api/member/entry");
// 	return {
// 		data: data,
// 		error: error,
// 		isLoading: isLoading,
// 	};
// };

export default useBlogDetail;
