import axios from "axios";

// Action
const ADD_COMM = "comment/ADD_COMM";
const DELETE_COMM = "comment/DELETE_COMM";
const UPDATE_COMM = "comment/UPDATE_COMM";
const GET_COMM = "comment/GET_COMM";

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

// 초기값
const initialState = {
  comments: [],
};

//미들웨어 댓글 가져오기
export const getCommentAX = (openApiId) => {
  return async function (dispatch, getState) {
    try {
      const { data } = await axios.get(
        `http://3.37.89.93/api/comment/${openApiId}`
      );
      console.log("댓글 가져오기", data);

      let comment_list = [...data];

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
    console.log("댓글등록내용", comment);
    try {
      const { data } = await axios.post("http://3.37.89.93/api/comment/", {
        comment: comment,
        userName: "22",
        storeId: storeId,
      });
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
    try {
      const { data } = await axios.delete(
        `http://3.37.89.93/api/comment/${comment.commentId}`
      );
      console.log(data);

      dispatch(deleteComment(comment.commentId));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

//미들웨어 댓글 수정
export const updateCommentAX = (comment, newComm) => {
  return async function (dispatch, getState) {
    console.log("수정 할 댓글", comment, newComm);
    try {
      const { data } = await axios.put(
        `http://3.37.89.93/api/comment/${comment.commentId}`,
        {
          comment: newComm,
          userId: "12",
          storeId: "1",
          userName: "22",
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
      const update_list = state.cards.map((e) => {
        if (action.payload.id === e.id) {
          return { ...e, title: action.payload.update };
        }
        return e;
      });
      return { comments: update_list };
    }

    default:
      return state;
  }
};

// reducer를 내보낸다
export default comment;
