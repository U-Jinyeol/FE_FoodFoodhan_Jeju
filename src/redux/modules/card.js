let id = 3;

// Action
const ADD_CARD = "todos/ADD_CARD";
const DELETE_CARD = "todos/DELETE_CARD";
const UPDATE_CARD = "todos/UPDATE_CARD";

// Action creators
export const addCard = (title, id) => ({
  type: ADD_CARD,
  payload: { ...title, id },
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});

export const updateCard = (title, id) => ({
  type: UPDATE_CARD,
  payload: { title, id },
});

// 초기값
const initialState = {
  cards: [
    { id: 1, title: "리덕스 연습" },
    { id: 2, title: "저녁 먹기" },
  ],
};

// Reducer
const card = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      id++;
      const new_list = [...state.cards, action.payload];
      return { todos: new_list };
    }

    case DELETE_CARD: {
      const new_list = state.cards.filter((e) => {
        return action.payload !== e.id;
      });
      return { cards: new_list };
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
