import axios from "axios";
const accessToken = document.cookie.split("=")[1];

// Action
const ADD_COMM = "comment/ADD_COMM";
const DELETE_COMM = "comment/DELETE_COMM";
const UPDATE_COMM = "comment/UPDATE_COMM";
const GET_COMM = "comment/GET_COMM";
const EDIT_COMM = "comment/EDIT_COMM";

// Action creators
export const addComment = (payload) => ({
  type: ADD_COMM,
  payload,
});

export const deleteComment = (payload) => ({
  type: DELETE_COMM,
  payload,
});

export const updateComment = (payload) => ({
  type: UPDATE_COMM,
  payload,
});

export const getComment = (payload) => ({
  type: GET_COMM,
  payload,
});

export const editComment = (payload) => ({
  type: EDIT_COMM,
  payload,
});

// 초기값
const initialState = {
  comments: [],
};

//미들웨어 댓글 가져오기
export const getCommentAX = (openApiId) => {
  return async function (dispatch, getState) {
    const accessToken = document.cookie.split("=")[1];
    try {
      const { data } = await axios.get(
        `http://3.37.89.93/api/comment/${openApiId}`,
        {
          headers: {
            "X-AUTH-TOKEN": `${accessToken}`,
          },
        }
      );
      console.log("댓글 가져오기", data);

      let comment_list = [];

      data.map((data) => {
        comment_list.push({ is_edit: false, ...data });
      });

      console.log(comment_list);
      dispatch(getComment(comment_list));
    } catch (error) {
      alert("댓글 가져오기 에러");
      console.log(error);
    }
  };
};

//미들웨어 댓글 등록
export const postCommentAX = (comment, storeId) => {
  return async function (dispatch, getState) {
    console.log("댓글등록내용", comment, storeId);
    console.log(localStorage.getItem("username"));
    const accessToken = document.cookie.split("=")[1];

    try {
      const { data } = await axios.post(
        "http://3.37.89.93/api/comment/",

        {
          comment: comment,
          userName: localStorage.getItem("username"),
          storeId: storeId,
        },
        {
          headers: {
            "X-AUTH-TOKEN": `${accessToken}`,
          },
        }
      );
      console.log(data);

      let comment_list = { ...data };

      console.log(comment_list);
      dispatch(addComment(comment_list));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

//미들웨어 댓글 삭제 http://3.37.89.93/api/comment/
export const deleteCommentAX = (comment) => {
  return async function (dispatch, getState) {
    console.log("삭제할 댓글 아이디", comment);
    const accessToken = document.cookie.split("=")[1];
    try {
      const { data } = await axios.delete(
        `http://3.37.89.93/api/comment/${comment.commentId}`,
        {
          headers: {
            "X-AUTH-TOKEN": `${accessToken}`,
          },
        }
      );
      console.log(data);

      dispatch(deleteComment(comment.commentId));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

//미들웨어 댓글 수정 활성화
export const isEdit = (commentId) => {
  return async function (dispatch, getState) {
    console.log(commentId);

    const _comment_list = getState().comment.comments;
    console.log(_comment_list);

    const comment_index = _comment_list.findIndex((b) => {
      return b.commentId === commentId;
    });
    console.log(comment_index);
    dispatch(editComment(comment_index));
  };
};

//미들웨어 댓글 수정
export const updateCommentAX = (comment, openApiId, newComm) => {
  return async function (dispatch, getState) {
    const accessToken = document.cookie.split("=")[1];
    console.log("수정 할 댓글", comment.commentId, openApiId, newComm);
    try {
      const { data } = await axios.put(
        `http://3.37.89.93/api/comment/${comment.commentId}`,
        {
          comment: newComm,
          userName: localStorage.getItem("username"),
          storeId: openApiId,
        },
        {
          headers: {
            "X-AUTH-TOKEN": `${accessToken}`,
          },
        }
      );
      console.log(data);

      dispatch(updateComment(data));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

// Reducer
const comment = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMM: {
      console.log(action.payload);
      return { comments: action.payload };
    }

    case ADD_COMM: {
      console.log(action.payload);
      const new_list = [...state.comments, action.payload];
      return { comments: new_list };
    }

    case DELETE_COMM: {
      console.log(action.payload);
      console.log(state);
      const new_list = state.comments.filter((e) => {
        return action.payload !== e.commentId;
      });
      return { comments: new_list };
    }

    case UPDATE_COMM: {
      console.log(action.payload);
      console.log(state);
      const update_list = state.comments.map((e) => {
        if (action.payload.commentId === e.commentId) {
          return { ...e, comment: action.payload.comment };
        }
        return e;
      });
      return { comments: update_list };
    }

    case EDIT_COMM: {
      console.log(action.payload);
      console.log(state);
      const edit_list = state.comments.map((e, i) => {
        if (action.payload === i) {
          if (e.is_edit === false) {
            return { ...e, is_edit: true };
          } else {
            return { ...e, is_edit: false };
          }
        } else {
          return e;
        }
      });
      console.log(edit_list);
      return { comments: edit_list };
    }

    default:
      return state;
  }
};

// reducer를 내보낸다
export default comment;
