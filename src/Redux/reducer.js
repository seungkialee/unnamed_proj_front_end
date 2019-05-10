const initialState = {
  currentUser: {},
  result: {},
  registerComponent: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ERRORS":
    //   return {
    //     ...state, errors: action.payload
    //   };

    case "RESPONSE_RESULT":
      return {
        ...state,
        result: action.payload
      };

    case "LOGIN_TOGGLE":
      return { ...state, registerComponent: !state.registerComponent };
    default:
      return state;
  }
};

export default reducer;
