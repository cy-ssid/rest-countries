import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home";
import countriesReducer from "./countries";

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const composeWithDevToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    home: homeReducer,
    countries: countriesReducer
  }),
  enhancer
);

export default store;
