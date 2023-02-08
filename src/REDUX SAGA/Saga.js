import { delay, put, takeLatest } from "redux-saga/effects";
import { addProduct } from "./Slice";

function* onAddProduct(actions) {
  try {
    const result = actions.payload;
    yield delay(3000);
    yield put(addProduct(result));
  } catch (err) {
    console.log("err",err);
  }
}

export function* watchAddNewBusinessRequest() {
  yield takeLatest("products/addProduct", onAddProduct);
}
