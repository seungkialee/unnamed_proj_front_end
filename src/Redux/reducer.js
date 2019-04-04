const initialState = {
  currentUser: {},
  result: {}
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

    default:
      return state;
  }
};

export default reducer;
