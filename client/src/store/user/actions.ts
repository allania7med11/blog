import { updateUrl } from "@/App";
import { Dispatch } from "../section/types";
import { apiUser } from "./api";
import { User, UserActionTypes, UserCreate, UserLogin } from "./types";

const { USER_UPDATE } = UserActionTypes;

export const userUpdate = (payload: User | null) => ({
  type: USER_UPDATE,
  payload: payload,
});

export const signUp = (user: UserCreate) => async (dispatch: Dispatch) => {
  let response = await apiUser.create(user);
  dispatch(userUpdate(response.data));
  updateUrl.push("/lectures");
};
export const login = (user: UserLogin) => async (dispatch: Dispatch) => {
  let response = await apiUser.login(user);
  console.log(response.data);
  if (response.status === 200) {
    dispatch(userUpdate(response.data));
  } else {
    dispatch(userUpdate(null));
  }
  updateUrl.push("/lectures");
};
export const getCurrent = () => async (dispatch: Dispatch) => {
  let response = await apiUser.current();
  if (response.status === 200) {
    dispatch(userUpdate(response.data));
  } else {
    dispatch(userUpdate(null));
  }
  updateUrl.push("/lectures");
};
export const logout = () => async (dispatch: Dispatch) => {
  let response = await apiUser.logout();
  if (response.status === 200) {
    dispatch(userUpdate(null));
  }
  updateUrl.push("/login");
};
