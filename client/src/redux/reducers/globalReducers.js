const initialState = {
  currentId: "",
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_ID":
      return {
        ...state,
        currentId: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
