import { getUsers } from "../../services";
export const fetchUser: any = () => {
  return (dispatch: any) => {
    getUsers().then((resolve) => {
      dispatch({ type: "FETCH_USERS", payload: resolve });
    });
  };
};
