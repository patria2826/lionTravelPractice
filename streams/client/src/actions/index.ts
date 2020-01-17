import {
  SIGNED_IN,
  SIGNED_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../types";
import streams from "../apis/streams";

export const signedIn = (userId: string | number) => {
  return { type: SIGNED_IN, payload: userId };
};

export const signedOut = () => {
  return { type: SIGNED_OUT };
};

export const createStream = (formValues: any) => async (
  dispatch: any,
  getState: any
) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch: any) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id: string | number) => async (dispatch: any) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id: string | number, formValues: any) => async (
  dispatch: any
) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id: number | string) => async (dispatch: any) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
