"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

//전역 개발자 정의 타입 참조하기
import {Article, IArticle} from "@/app/types/definitions";

//게시글 등록이후 페이지 이동을 위한 navigate참조하기
import {useRouter} from "next/navigation";

// type Article = {
// 	article_id: number;
// 	board_type_code: number;
// 	article_type_code: number;
// 	title: string;
// 	contents: string | null;
// 	view_count: number;
// 	ip_address: string;
// 	is_display_code: number;
// 	reg_date: string;
// 	reg_member_id: number;
// 	edit_date: string | null;
// 	edit_member_id: number | null;
// };

export default function BlogMain() {
	const router = useRouter();

	//useState()의 초기값으로 제공되는 타입과 실제관리되는 데이터의 타입을 정의해준다.
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		//fetch를 통해 벡엔드에서 데이터 조회 바인딩 참조하기
		const fetchData = async () => {
			const response = await fetch("http://localhost:3005/api/articles", {
				method: "GET",
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			//fetch API 호출결과
			const result = await response.json();
			console.log("처리결과 데이터:", result);
			setArticles(result.data);

			if (result.code == "200") {
				//특정 URL페이지로 이동시키기
				router.push("/blog/list");
			}
		};

		fetchData().catch((e) => {
			// handle the error as needed
			console.error("An error occurred while fetching the data: ", e);
		});
	}, []);

	return (
		<div>
			<h3>블로그 목록</h3>
			<Link href="/blog/create">신규 게시글 작성</Link>
			<table className="table-auto text-center lg:w-full">
				<thead>
					<tr>
						<th>글제목</th>
						<th>조회수</th>
						<th>작성일시</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article, index) => (
						<tr key={index}>
							<td>
								<Link href={`/blog/${article.article_id}`}>{article.title}</Link>
							</td>
							<td>{article.view_count}</td>
							<td>{article.reg_date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
