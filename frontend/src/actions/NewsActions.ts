export const SET_NEWS = "SET_NEWS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setNews = (news: any[]) => ({
  type: SET_NEWS,
  payload: news,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});
