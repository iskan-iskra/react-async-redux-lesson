import { userService } from "@/api";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchUserList() {
  try {
    yield put({ type: "SET_LOADING", payload: true });
    yield put({ type: "SET_ERROR", payload: false });

    const data = yield call(userService.getUserList);

    yield put({ type: "SET_USER_LIST", payload: data });
  } catch (error) {
    console.log(error);

    yield put({ type: "SET_ERROR", payload: true });
  } finally {
    yield put({ type: "SET_LOADING", payload: false });
  }
}

export function* watchFetchUserList() {
  yield takeEvery("FETCH_USER_LIST", fetchUserList);
}
