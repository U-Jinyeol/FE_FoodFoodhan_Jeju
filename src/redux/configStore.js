//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Card from "./modules/card";
import Comment from "./modules/comment";
import User from "./modules/user";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  user: User,
  card: Card,
  comment: Comment,
  router: connectRouter(history),
});

//리듀서 말고 추가로 묶어줄 모음
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
