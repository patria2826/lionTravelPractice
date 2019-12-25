import { Action } from "../interface";
import { SIGNED_IN, SIGNED_OUT } from "../types";

const INITIAL_STATE = { isSignedIn: false, userId: null };

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SIGNED_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGNED_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
