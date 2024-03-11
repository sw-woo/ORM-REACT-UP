import axios from "axios";
import config from "./../config";

// default
axios.defaults.baseURL = config.API_URL;

// 벡엔드 호출시 전달하는 데이터의 기본포맷지정
axios.defaults.headers.post["Content-Type"] = "application/json";

// intercepting to capture errors
axios.interceptors.response.use(
	function (response) {
		//벡엔드에서 반환하는값이 response값으로 전달되게 조작(res.data를 안쓰게...)
		return response.data ? response.data : response;
	},
	function (error) {
		// 벡엔드에서 에러 생성시 진행
		let message;
		switch (error.status) {
			case 500:
				message = "Internal Server Error";
				break;
			case 401:
				message = "Invalid credentials";
				break;
			case 404:
				message = "Sorry! the data you are looking for could not be found";
				break;
			default:
				message = error.message || error;
		}
		return Promise.reject(message);
	}
);

/**
 * axios에 header.Authorization에 JWT 사용자 인증 토큰 기본값 셋팅
 * @param {*} token
 */
const setAuthorization = (token) => {
	axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

//리액트앱에서 각각의 화면에서 또는 모듈에서 axios를 직접 사용하지 않고

class APIClient {
	/**
	 * Fetches data from given url
	 */
	get = (url, params) => {
		return axios.get(url, params);
	};

	/**
	 * post given data to url
	 */
	create = (url, data) => {
		return axios.post(url, data);
	};

	/**
	 * Updates data
	 */
	update = (url, data) => {
		return axios.patch(url, data);
	};

	/**
	 * Delete
	 */
	delete = (url) => {
		return axios.put(url);
	};
}

export {APIClient, setAuthorization};
