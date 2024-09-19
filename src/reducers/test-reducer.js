const initialState = {
  test: "",
  testLoading: false,
  testError: false,
};

export function testReducer(state = initialState, action) {
  switch (action.type) {
    case "changeTest":
      return { ...state, test: action.payload };

    default:
      return state;
  }
}
