import { legacy_createStore, applyMiddleware } from "redux";
import { Reducer } from "../Reducers/Reducer";
import logger from "redux-logger";

var myStore = legacy_createStore(Reducer, applyMiddleware(logger));

export default myStore;
