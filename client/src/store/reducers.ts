import { combineReducers } from "redux";
import breakpointReducer from "./breakpoint";
import sectionReducer from "./section";
import userReducer  from "./user";

const reducer = combineReducers({
  user: userReducer,
  section: sectionReducer,
  breakpoint: breakpointReducer
  
});

export default reducer;
