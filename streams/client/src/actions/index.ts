import { SIGNED_IN, SIGNED_OUT } from "../types";

export const signedIn = (userId: string | number) => {
  return { type: SIGNED_IN, payload: userId };
};
export const signedOut = () => {
  return { type: SIGNED_OUT };
};
