import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export type RootState = ReturnType<typeof reducer>;
export default store;