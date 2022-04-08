let id = 3;

// Action
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";

// Action creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { ...title, id },
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const updateTodo = (title, id) => ({
  type: UPDATE_TODO,
  payload: { title, id },
});

// 초기값
const initialState = {
  todos: [
    { id: 1, title: "리덕스 연습" },
    { id: 2, title: "저녁 먹기" },
  ],
};

// Reducer
const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      id++;
      const new_list = [...state.todos, action.payload];
      return { todos: new_list };
    }

    case DELETE_TODO: {
      const new_list = state.todos.filter((e) => {
        return action.payload !== e.id;
      });
      return { todos: new_list };
    }

    case UPDATE_TODO: {
      console.log(action.payload);
      const update_list = state.todos.map((e) => {
        console.log(e);
        if (action.payload.id === e.id) {
          return (e.title = action.payload.title);
        }
        console.log(update_list);
      });
      return { todos: update_list };
    }

    default:
      return state;
  }
};

// reducer를 내보낸다
export default users;
