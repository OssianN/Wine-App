import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import wineReducer from './wineReducer'

export default combineReducers({
  auth: authReducer,
  errorState: errorReducer,
  wineArr: wineReducer
});
