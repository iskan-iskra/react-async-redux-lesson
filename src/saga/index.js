import { all } from "redux-saga/effects";
import { watchFetchUserList } from "./userListSaga";

export default function* rootSaga() {
  yield all([watchFetchUserList()]);
}
