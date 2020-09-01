const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, error: null };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, error: null };
    case "SIGN_IN_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
