import { delay, put, takeLatest } from "redux-saga/effects";
import { addNumbersSuccess } from "./Calculator.Slice";

function* onAddNumber(actions) {
  try {
    const result = +actions.payload.num1 + +actions.payload.num2;
    console.log("Calc Saga", { result });

    yield delay(3000);
    yield put(addNumbersSuccess(result));
  } catch (err) {
    console.log("@AJ err: ", err);
  }
}
function* onSubNumber(actions) {
  try {
    const result = +actions.payload.num1 - +actions.payload.num2;
    console.log("Calc Saga", { result });

    // yield delay(3000);
    yield put(addNumbersSuccess(result));
  } catch (err) {
    console.log("@AJ err: ", err);
  }
}

export function* watchAddNewBusinessRequest() {
  yield takeLatest("calculator/subNumbers", onSubNumber);
  yield takeLatest("calculator/addNumbers", onAddNumber);
}
