"use client";
import React, {useState, useEffect} from "react";

//게시글 등록이후 페이지 이동을 위한 navigate참조하기
import {useRouter} from "next/navigation";

//전역 개발자 정의 타입 참조하기
import {member} from "@/app/types/definitions";

import useSWR, {mutate} from "swr";

export default function Regist() {
	const router = useRouter();

	const [member, setMember] = useState<member>({email: "", password: "", name: ""});

	const onMemberChange = (e: any) => {
		setMember({...member, [e.target.name]: e.target.value});
	};

	const onMemberSubmit = (e: any) => {
		e.preventDefault();

		const fetchData = async () => {
			const response = await fetch(`http://localhost:3005/api/member/entry`, {
				method: "POST",
				headers: {
					//Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(member),
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			//fetch API 호출결과
			const result = await response.json();
			console.log("처리결과 데이터:", result);

			if (result.code == "200") {
				//특정 URL페이지로 이동시키기
				router.push("/login");
			}
		};

		fetchData().catch((e) => {
			// handle the error as needed
			console.error("An error occurred while fetching the data: ", e);
		});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={onMemberSubmit}>
					<div>
						<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								value={member.email}
								onChange={onMemberChange}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
							name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								value={member.name}
								onChange={onMemberChange}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								value={member.password}
								onChange={onMemberChange}
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign Up
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Already a member?
					<a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Sign in
					</a>
				</p>
			</div>
		</div>
	);
}
