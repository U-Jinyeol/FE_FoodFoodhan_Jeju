import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
const accessToken = document.cookie.split("=")[1];

const SET_LIKE = "SET_LIKE";

export const setLike = (payload) => ({
  type: SET_LIKE,
  payload,
});

const initialState = {
  list: {
    // postId: 0,
    // nickname: "juyeong",
    // likeCnt: 2,
    // islike: false,
  },
};

export const getLikeAX = (o) => {
  return async function (dispatch, getState, { history }) {
    const accessToken = document.cookie.split("=")[1];
    try {
      const { data } = await axios.get(`http://3.37.89.93/api/joayo/`, {
        headers: {
          "X-AUTH-TOKEN": `${accessToken}`,
        },
      });

      console.log(data);
    } catch (error) {
      alert("좋아요 불러오기 에러");
      console.log(error);
    }
  };
};

export const postLikeAX = (openApiId) => {
  console.log(openApiId);
  return async function (dispatch, getState, { history }) {
    try {
      const { data } = await axios.post(
        "http://3.37.89.93/api/joayo",
        {
          openApiId: openApiId,
          userName: localStorage.getItem("username"),
        },
        {
          headers: {
            "X-AUTH-TOKEN": `${accessToken}`,
          },
        }
      );
      console.log(data);

      // const like_data = {
      //   popenApiId: openApiId,
      //   likeCnt: like_res.likeCnt,
      //   islike: like_res.islike,
      //   userNam:
      // };

      // let comment_list = { ...data };

      // console.log(comment_list);
      // dispatch(addComment(comment_list));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

export default handleActions(
  {
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.like_data;
      }),
  },
  initialState
);
