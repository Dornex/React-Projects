import history from "../history";
import auth from "../apis/auth";
import tracker from "../apis/tracker";

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
  history.push("/");
};

export const signInNode = (formValues) => async (dispatch) => {
  try {
    const response = await auth.post("/signin", { ...formValues });
    localStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN" });
    history.push("/");
  } catch (err) {
    const errorMessage = err.response.data.error;
    dispatch({ type: "SIGN_IN_ERROR", payload: errorMessage });
  }
};

export const registerUser = (formValues) => async () => {
  await auth.post("signup", { ...formValues });
  history.push("/login");
};

export const createTrack = (formValues) => async (dispatch) => {
  const response = tracker.post("/trackers", formValues);
  // history.push("/");
};
