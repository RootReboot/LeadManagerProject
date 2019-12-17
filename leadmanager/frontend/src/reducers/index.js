import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  leadsReducer,
  errorsReducer
});
