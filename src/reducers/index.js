import { combineReducers } from "redux";
import { userReducer, getUserListAction } from "./user-reudcer";
import { testReducer } from "./test-reducer";

export const rootReducer = combineReducers({
  users: userReducer,
  test: testReducer,
});

export { getUserListAction };
