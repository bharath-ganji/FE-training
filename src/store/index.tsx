import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { userInitialState } from "./users/reducer";

const appInitialState = {
  users: userInitialState,
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  appInitialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
