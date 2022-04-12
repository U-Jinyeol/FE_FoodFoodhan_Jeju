import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../Cookie.js";
// Action

const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
const GET_USER = "user/GET_USER";

// const ADD_TODO = "todos/ADD_TODO";
// const DELETE_TODO = "todos/DELETE_TODO";
// const UPDATE_TODO = "todos/UPDATE_TODO";

// Action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// 초기값
const initialState = {
  user: null,
  is_login: false,
};

// Reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        //원래 IS_LOGIN 자리에 토큰이 들어가야함. 지금은 간단하게만 작업함.
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
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
};
export { actionCreators };
