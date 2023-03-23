import { all, fork } from "redux-saga/effects";
import { watchAddNewBusinessRequest } from "../REDUX CART/Products.Saga"

export default function* RootSaga() {
  yield all([fork(watchAddNewBusinessRequest)]);
}
