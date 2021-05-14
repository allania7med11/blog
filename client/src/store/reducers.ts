import { combineReducers } from "redux";
import breakpointReducer from "./breakpoint";
import sectionReducer from "./section";

const reducer = combineReducers({
  section: sectionReducer,
  breakpoint: breakpointReducer,
});

export default reducer;
