import { SET_NEWS, SET_LOADING, SET_ERROR } from "../actions/NewsActions";

const initialState = {
  news: [],
  loading: true,
  error: null,
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default newsReducer;
