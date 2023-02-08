import { delay, put, takeLatest } from "redux-saga/effects";
import { getProductsSuccess } from "./Products.Slice";
import axios from "axios";

function getProductFetch(url) {
  return axios.get(url).then((data) => {
    return data.data;
  });
}

function* onGetProduct(actions) {
  try {
    const result = yield getProductFetch("https://fakestoreapi.com/products");
    console.log("result", result);
    yield put(getProductsSuccess({ result: result }));
  } catch (err) {
    console.log("err", err);
  }
}

export function* watchAddNewBusinessRequest() {
  yield takeLatest("products/getProducts", onGetProduct);
}
