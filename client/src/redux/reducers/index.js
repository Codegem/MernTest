import { combineReducers } from "redux";
import PostsReducer from "./postsReducers";
import GlobalReducer from "./globalReducers";

export const reducer = combineReducers({
  posts: PostsReducer,
  global: GlobalReducer,
});
