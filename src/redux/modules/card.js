import axios from "axios";
import { history } from "../configStore";

// Action
const LOAD_CARD = "LOAD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const EDIT_LIKE = "EDIT_LIKE";

// Action creators
export const loadCard = (payload) => ({
  type: LOAD_CARD,
  payload,
});

export const editLike = (like_data) => ({
  type: EDIT_LIKE,
  payload: { like_data },
});

// 초기값
const initialState = {
  cards: [],
};

//middleware 메인화면 LOAD
export const loadCardAX = () => {
  return async function (dispatch, getState) {
    try {
      const { data } = await axios.get("http://3.37.89.93/api/main");
      console.log(data);

      let card_list = [...data];

      console.log(card_list);
      dispatch(loadCard(card_list));
    } catch (error) {
      alert("에러가 발생했습니다.");
      console.log(error);
    }
  };
};

//middleware 카테고리
export const regionCardAX = (region_name) => {
  return async function (dispatch, getState) {
    console.log(region_name);
    try {
      const { data } = await axios.get(
        `http://3.37.89.93/api/main/${region_name}`
      );
      console.log(data);

      let region_data = [...data];
      console.log(region_data);
      dispatch(loadCard(region_data));
    } catch (error) {
      alert("카테고리 실패");
      console.log(error);
    }
  };
};

// middleware 상세페이지
export const detailCardAX = (openApiId) => {
  return async function (dispatch, getState, { history }) {
    console.log(openApiId);
    try {
      const { data } = await axios.get(
        `http://3.37.89.93/api/main/${openApiId}/detail`
      );
      console.log(data);

      let detail_data = [{ ...data }];
      console.log(detail_data);
      dispatch(loadCard(detail_data));
    } catch (error) {
      alert("상세 페이지 실패");
      console.log(error);
    }
  };
};

//middleware 좋아요 버튼
export const LikeAX = (storeId, userName) => {
  return async function (dispatch, getState, { history }) {
    console.log(storeId);
    //로그인 되면 이제 토큰도 보내야함
    if (!storeId) {
      console.log("게시물 정보 없음");
      return;
    }

    try {
      const { data } = await axios.get("http://localhost:3003/cards");
      console.log(data);
      const like_data = {
        storeId: storeId,
        userName: userName,
        likeCnt: data.likeCnt,
        likeState: data.likeState,
      };

      let detail_data = [...data];
      console.log(detail_data);
      // dispatch(loadCard(detail_data));
    } catch (error) {
      alert("좋아요 실패");
      console.log(error);
    }
  };
};

// const { data } = await axios.get("http://localhost:3003/cards", {
//       params: {
//         limit: "10",
//         type: "jeju",
//         page: "1",
//       },
//     });

// export const regionCardAX = (region) => {
//   return async function (dispatch, getState) {
//     const { data } = await axios.get("http://localhost:3003/cards");
//     console.log(data);
//     console.log(region);
//     let card_list = [...data];

//     if (region === "All") {
//       return dispatch(loadCard(card_list));
//     } else {
//       console.log(region);
//       const region_list = card_list.filter(
//         (e) => e.regions.regionName === region
//       );

//       console.log(region_list);
//       return dispatch(loadCard(region_list));
//     }
//   };
// };

// Reducer
const card = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARD: {
      console.log(action.payload);
      return { cards: action.payload };
    }

    case EDIT_LIKE: {
      console.log(action.payload);
    }

    // case UPDATE_CARD: {
    //   console.log(action.payload);
    //   const update_list = state.cards.map((e) => {
    //     if (action.payload.id === e.id) {
    //       return { ...e, title: action.payload.update };
    //     }
    //     return e;
    //   });
    //   return { cards: update_list };
    // }

    default:
      return state;
  }
};

// reducer를 내보낸다
export default card;
