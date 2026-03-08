import { combineReducers } from "redux";
import contactReducer from "./Contact/reducer";

export default combineReducers({
  contact: contactReducer,
});
