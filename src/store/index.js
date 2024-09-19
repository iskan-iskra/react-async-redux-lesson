// import { customAsyncReduxMiddleWare } from "@/middleWare";
import { rootReducer } from "@/reducers";
import rootSaga from "@/saga";
import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export { store };
