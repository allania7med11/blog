import { combineReducers } from "redux";
import breakpointReducer from "./breakpoint";
import sectionReducer from "./section";
import { userReducer } from "./user";

const reducer = combineReducers({
  section: sectionReducer,
  breakpoint: breakpointReducer,
  user: userReducer
});

export default reducer;
