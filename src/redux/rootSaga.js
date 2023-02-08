//Saga effects
import { all, fork } from "redux-saga/effects";
import { watchAddNewBusinessRequest } from "../Calculator/Calculator.Saga";

export default function* rootSaga() {
  yield all([fork(watchAddNewBusinessRequest)]);
}
