import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import RootSaga from "./RootSaga";
import ProductSlice from "../SAGA/Products.Slice";

const sagaMiddleware = createSagaMiddleware();

export const sagaStore = configureStore({
  reducer: {
    products: ProductSlice,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(RootSaga);

// import createSagaMiddleware from "@redux-saga/core";
// import { configureStore } from "@reduxjs/toolkit";
// import RootSaga from "./RootSaga";
// import ProductSlice from "../REDUX SAGA/Slice";

// const sagaMiddleware = createSagaMiddleware();

// export const sagaStore = configureStore({
//   reducer: {
//     products: ProductSlice,
//   },
//   middleware: (currentMiddleware) => [
//     ...currentMiddleware({ thunk: false }),
//     sagaMiddleware,
//   ],
// });

// sagaMiddleware.run(RootSaga);
