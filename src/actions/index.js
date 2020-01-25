import * as types from "./types";
import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: types.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT
  };
};

export const createStream = formValues => {
  return async dispatch => {
    streams.post("/streams", formValues);
  };
};
