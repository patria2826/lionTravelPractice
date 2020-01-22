import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../types";
import { IAction } from "../interface";
import _ from "lodash";

export default (state = {}, action: IAction) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //the payload of DELETE_STREAM action is id(check the action creator if you forgot)
      return _.omit(state, action.payload);
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
