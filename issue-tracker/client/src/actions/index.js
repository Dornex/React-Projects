import history from "../history";
import auth from "../apis/auth";

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
  const response = await auth.post("/signin", { ...formValues });
  console.log(response.data);
  localStorage.setItem("token", response.data.token);
  dispatch({ type: "SIGN_IN" });
  history.push("/");
};

export const registerUser = (formValues) => async (dispatch, getState) => {
  await auth.post("signup", { ...formValues });
  history.push("/login");
};
