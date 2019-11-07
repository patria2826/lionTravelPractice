import Action from "../interfaces/Action";

export default (state: any[] = [], action: Action): any => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
