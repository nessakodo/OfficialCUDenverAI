import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import newsReducer from "../reducers/newsReducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
    news: newsReducer,
  });
  
  const store = createStore(rootReducer);

  export default store;