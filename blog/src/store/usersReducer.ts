import Action from "../interfaces/Action";

export default (state: any[] = [], action: Action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
