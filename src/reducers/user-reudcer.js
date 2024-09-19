import { userService } from "@/api";

const initialState = {
  userList: [],
  loading: false,
  error: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_LIST":
      return { ...state };

    case "SET_USER_LIST":
      return { ...state, userList: [...action.payload] };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export const getUserListAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: false });
      const data = await userService.getUserList();
      dispatch({ type: "SET_USER_LIST", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_ERROR", payload: true });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
};
