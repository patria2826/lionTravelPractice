import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  //using thunk
  return async (dispatch: any) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (userId: number) => {
  return async (dispatch: any) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

// 2nd solution to keep the app from requesting many times over same value
export const fetchPostsAndUsers = () => {
  return async (dispatch: any, getState: any) => {
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts, "userId"));
    ////await doesn't work with forEach
    // userIds.forEach((id: number) => dispatch(fetchUser(id)));

    _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((id: number) => dispatch(fetchUser(id)))
      .value(); //use value() to execute the chained functions
  };
};
//
//
//
//
// 1st solution to keep the app from requesting many times over same value
// export const fetchUser = (userId: number) => {
//   return (dispatch: any) => {
//     _fetchUser(userId, dispatch);
//   };
// };
// const _fetchUser = _.memoize(async (userId: number, dispatch: any) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
