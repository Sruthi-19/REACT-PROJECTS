import axios from "axios";
import { delay, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchProductsSuccess,
  addItemSuccess,
  removeItemSuccess,
} from "./Products.Slice";

function fetchAPI(url) {
  return axios.get(url).then((data) => {
    return data.data;
  });
}

function* generatorFetchProducts(actions) {
  try {
    const result = yield fetchAPI("https://fakestoreapi.com/products");
    // console.log("result in saga", result);
    yield put(fetchProductsSuccess({ result: result }));
  } catch (err) {
    console.log("error");
  }
}

function* generatorAddCart(actions) {
  try {
    var itemCount1 = yield select((state) => state.products.itemCount);
    var price1 = yield select((state) => state.products.price);
    var subTotal1 = yield select((state) => state.products.subTotal);

    let countResult = 0;
    let result = {};
    let title = "";
    let subTotalResult = 0;
    if (
      itemCount1[actions.payload.title] == undefined ||
      itemCount1[actions.payload.title] == null ||
      itemCount1[actions.payload.title] == 0
    ) {
      countResult = 1;
      result = actions.payload;
      title = actions.payload.title;
      subTotalResult = actions.payload.price;
    } else {
      countResult = itemCount1[actions.payload.title] + 1;
      result = null;
      title = actions.payload.title;
      subTotalResult = subTotal1[actions.payload.title] + actions.payload.price;
    }
    price1 += actions.payload.price;
    yield put(
      addItemSuccess({
        countResult: countResult,
        result: result,
        title: actions.payload.title,
        price: price1,
        subTotal: subTotalResult,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

function* generatorRemoveCart(actions) {
  try {
    var itemCount1 = yield select((state) => state.products.itemCount);
    var price1 = yield select((state) => state.products.price);
    var subTotal1 = yield select((state) => state.products.subTotal);
    var cartArray1 = yield select((state) => state.products.cartArray);

    let countResult = 0;
    let result = {};
    let title = "";
    let subTotalResult = 0;
    let itemObject = actions.payload;

    cartArray1 = cartArray1.map((val, index) => {
      if (val.title == itemObject.title) {
        if (itemCount1[itemObject.title] == 1) {
          countResult = 0;
          subTotalResult = 0;
          price1 = (price1 * 100 - itemObject.price * 100) / 100;
          cartArray1.splice(index, 1);
        } else {
          countResult = itemCount1[actions.payload.title] - 1;
          subTotalResult = subTotal1[actions.payload.title] - 1;
          price1 = (price1 * 100 - itemObject.price * 100) / 100;
        }
      }
    });
    yield put(
      removeItemSuccess({
        countResult: countResult,
        title: actions.payload.title,
        price: price1,
        subTotal: subTotalResult,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
export function* watchAddNewBusinessRequest() {
  yield takeLatest("products/fetchProducts", generatorFetchProducts);
  yield takeLatest("products/addItem", generatorAddCart);
  yield takeLatest("products/removeItem", generatorRemoveCart);
}
