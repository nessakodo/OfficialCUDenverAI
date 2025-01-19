import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from "../reducers/NewsReducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
    news: newsReducer,
  });
  
  const store = createStore(rootReducer);

  export default store;