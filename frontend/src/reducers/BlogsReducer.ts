import { SET_BLOGS, SET_LOADING, SET_ERROR } from "../actions/BlogsActions";

const initialState = {
  blogs: [],
  loading: true,
  error: null,
};

const blogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BLOGS:
      return { ...state, blogs: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default blogsReducer;
