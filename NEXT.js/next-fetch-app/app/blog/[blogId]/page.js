"use client";
import React, {useEffect, useState} from "react";

//게시글 등록이후 페이지 이동을 위한 navigate참조하기
import {useRouter} from "next/navigation";

export default function BlogDetal(props) {
	console.log("props정보 확인하기", props);

	const articleId = props.params.blogId;

	const router = useRouter();

	const [article, setArticle] = useState({
		title: "",
		contents: "",
		is_display_code: 1,
	});

	const onBlogChange = (e) => {
		setArticle({...article, [e.target.name]: e.target.value});
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3005/api/articles/${articleId}`, {
				method: "GET",
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			//fetch API 호출결과
			const result = await response.json();
			console.log("처리결과 데이터:", result);

			if (result.code == "200") {
				//성공시 article바인딩 데이터 조회해온 데이터로 업데이트
				setArticle(result.data);
			}
		};

		fetchData().catch((e) => {
			// handle the error as needed
			console.error("An error occurred while fetching the data: ", e);
		});
	}, []);

	const onBlogSubmit = (e) => {
		e.preventDefault();

		const fetchData = async () => {
			const response = await fetch(`http://localhost:3005/api/articles/${articleId}`, {
				method: "POST",
				headers: {
					//Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(article),
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			//fetch API 호출결과
			const result = await response.json();
			console.log("처리결과 데이터:", result);

			if (result.code == "200") {
				//특정 URL페이지로 이동시키기
				router.push("/blog/list");
			}
		};

		fetchData().catch((e) => {
			// handle the error as needed
			console.error("An error occurred while fetching the data: ", e);
		});
	};

	return (
		<>
			<div>게시글 상세</div>
			<form onSubmit={onBlogSubmit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">게시글 수정</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">게시글을 수정해주세요!</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
									글제목
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="title"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={onBlogChange}
										value={article.title}
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
									글내용
								</label>
								<div className="mt-2">
									<textarea
										id="about"
										name="contents"
										value={article.contents}
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										defaultValue={""}
										onChange={onBlogChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => router.push("/blog/detail")}>
						목록
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						저장
					</button>
				</div>
			</form>
		</>
	);
}
