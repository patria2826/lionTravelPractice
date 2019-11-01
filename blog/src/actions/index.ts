import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  //using thunk
  return async (dispatch: any) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
