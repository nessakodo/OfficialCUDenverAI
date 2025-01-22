export const SET_BLOGS = "SET_BLOGS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setBlogs = (blogs: any[]) => ({
  type: SET_BLOGS,
  payload: blogs,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});
