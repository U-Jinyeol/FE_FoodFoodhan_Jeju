import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
  baseURL: "http://3.37.89.93/", // api주소 들어가야함
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

api.interceptors.request.use(
    function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
	
	// user
	login: (userName, password) =>
    api.post('/api/user/login', {
        userName: userName,
        password: password,
    }),
	signup: (userName,password,) => // nickName, 
		api.post('/api/user/signup', { //nickName: nickName,
			userName: userName,
			password: password,
		}),
};