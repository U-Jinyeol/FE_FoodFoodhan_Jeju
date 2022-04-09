import axios from "axios";

// Action
const LOAD_CARD = "LOAD_CARD";
const UPDATE_CARD = "UPDATE_CARD";

// Action creators
export const loadCard = (payload) => ({
  type: LOAD_CARD,
  payload,
});

export const updateCard = (title) => ({
  type: UPDATE_CARD,
  payload: { title },
});

// 초기값
const initialState = {
  cards: [],
};

//middleware 메인화면 LOAD
export const loadCardAX = () => {
  return async function (dispatch, getState) {
    try {
      const { data } = await axios.get("http://localhost:3003/cards/");
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

export const regionCardAX = (region) => {
  return async function (dispatch, getState) {
    const { data } = await axios.get("http://localhost:3003/cards");
    console.log(data);
    console.log(region);
    let card_list = [...data];

    if (region === "All") {
      return dispatch(loadCard(card_list));
    } else {
      console.log(region);
      const region_list = card_list.filter(
        (e) => e.regions.regionName === region
      );

      console.log(region_list);
      return dispatch(loadCard(region_list));
    }
  };
};

//middleware Get test
// export const addCardAX = () => {
//   return async function (dispatch, getState) {
//     try {
//       const { data } = await axios.get("http://52.79.239.130/api/comments");
//       console.log(data);
//     } catch (error) {
//       alert("에러가 발생했습니다.");
//       console.log(error);
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

    case UPDATE_CARD: {
      console.log(action.payload);
      const update_list = state.cards.map((e) => {
        if (action.payload.id === e.id) {
          return { ...e, title: action.payload.update };
        }
        return e;
      });
      return { cards: update_list };
    }

    default:
      return state;
  }
};

// reducer를 내보낸다
export default card;
