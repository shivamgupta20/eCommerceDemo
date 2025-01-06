import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./combineReducer";
import mySaga from "./saga";

const sageMiddleware = createSagaMiddleware();

const  store = configureStore({
    reducer: combineReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sageMiddleware)
});

sageMiddleware.run(mySaga);
export default store;