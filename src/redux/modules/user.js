import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../Cookie.js";

import { apis } from "../../Api";

// Action

const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
const GET_USER = "user/GET_USER";

// Action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// 초기값
const initialState = {
  user: null,
  is_login: false,
};

//middleware
const loginDB = (userName, password) => {
  return function (dispatch, getstate, { history }) {
    apis
      .login(userName, password)
      .then((res) => {
        console.log(res);
        setCookie("token", res.data[1].token, 7);
        localStorage.setItem("userName", res.data[0].username);
        dispatch(logIn({ userName: userName }));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("없는 회원정보 입니다. 회원가입을 해주세요.");
      });
  };
};
const signupDB = (userName, password) => {
  //nickname, pwdCheck)
  return function (dispatch, getstate, { history }) {
    apis
      .signup(userName, password) //nickname, pwdCheck
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        window.alert("이미 존재하는 아이디입니다.");
      });
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.replace("/main");
  };
};

// Reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// reducer를 내보낸다
const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginDB,
  logoutDB,
  signupDB,
};
export { actionCreators };
