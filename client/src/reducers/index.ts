import { combineReducers } from "redux";
import sectionReducer from "./section";

const reducer = combineReducers({ section: sectionReducer });

export default reducer;
