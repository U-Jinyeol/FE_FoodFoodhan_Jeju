import axios from "axios";



export const api = axios.create({
  baseURL: "http://3.37.89.93/", // api주소 들어가야함
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(
    function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
    console.log(config);
	return config;
});

export const apis = {
	
	// user
	login: (username, password) =>
    api.post('/api/user/login', {
        username: username,
        password: password,
    }),
	signup: (username,password,) => // nickName, 
		api.post('/api/user/signup', { //nickName: nickName,
			username: username,
			password: password,
		}),
};