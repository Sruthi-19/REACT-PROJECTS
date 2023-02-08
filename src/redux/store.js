import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../Calculator/Calculator.Slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
