import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";
export const signIn = (userID) => {
  return {
    type: SIGN_IN,
    payload: userID,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const createStream = (formValue) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", {
      ...formValue,
      userId,
    });
    dispatch({
      type: CREATE_STREAM,
      payload: response.data,
    });
  };
  // do some Programmatic navigation to
  // get the user back to the root reducer
};
export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data,
    });
  };
};
export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: response.data,
    });
  };
};
export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data,
    });
  };
};
export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: DELETE_STREAM,
      payload: id,
    });
  };
};
